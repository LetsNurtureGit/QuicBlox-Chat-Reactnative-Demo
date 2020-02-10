import { showMessage } from 'react-native-flash-message'
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Platform } from 'react-native'
import QB from 'quickblox-react-native-sdk'

import { saveUdid, removeUdid } from './actionCreators'
import gServices from '../android/app/google-services.json'
import { store } from './store'
import { colors } from './theme'

/**
 * Show error message with title and description (optional)
 * @param {string} error 
 * @param {string=} description 
 */
export const showError = (error, description) => showMessage({
  type: 'danger',
  message: error,
  description
})

/**
 * Show success message with title and description (optional)
 * @param {string} message 
 * @param {string=} description 
 */
export const showSuccess = (message, description) => showMessage({
  type: 'success',
  backgroundColor: colors.primary,
  message,
  description,
})

export const setupPushNotifications = () => {
  let senderID
  if (Platform.OS === 'android') {
    if (gServices &&
        gServices.project_info &&
        gServices.project_info.project_number) {
      senderID = gServices.project_info.project_number
    } else {
      return
    }
  }
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function ({ token }) {
      QB.subscriptions
        .create({ deviceToken: token })
        .then(subscriptions => {
          const udid = subscriptions[0].deviceUdid
          if (udid) {
            store.dispatch(saveUdid(udid))
          }
        })
        .catch(e => showError(
          'Error occured while subscribing to push events',
          e.message
        ))
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function (notification) {
      // process the notification
      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      if (Platform.OS === 'ios') {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      }
    },

    // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID,

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     */
    requestPermissions: true
  })
}

export const removePushSubscription = () => new Promise((resolve) => {
  const { device: { udid } } = store.getState()
  store.dispatch(removeUdid())
  if (udid) {
    QB.subscriptions
      .get()
      .then(subscriptions => {
        subscriptions.forEach(subscription => {
          if (subscription.deviceUdid === udid) {
            QB.subscriptions.remove({ id: subscription.id })
          }
        })
        resolve()
      })
  } else {
    resolve()
  }
})