// QB initialization
export const INIT_QB_REQUEST = 'INIT_QB_REQUEST'
export const INIT_QB_REQUEST_SUCCESS = 'INIT_QB_REQUEST_SUCCESS'
export const INIT_QB_REQUEST_FAIL = 'INIT_QB_REQUEST_FAIL'
// Internet connection state
export const CONNECTION_STATE_CHANGE = 'CONNECTION_STATE_CHANGE'
// User authentication
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL'
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL'
export const AUTH_GET_SESSION_REQUEST = 'AUTH_GET_SESSION_REQUEST'
export const AUTH_GET_SESSION_SUCCESS = 'AUTH_GET_SESSION_SUCCESS'
export const AUTH_GET_SESSION_FAIL = 'AUTH_GET_SESSION_FAIL'
// QB chat authentication
export const CHAT_IS_CONNECTED_REQUEST = 'CHAT_IS_CONNECTED_REQUEST'
export const CHAT_IS_CONNECTED_SUCCESS = 'CHAT_IS_CONNECTED_SUCCESS'
export const CHAT_IS_CONNECTED_FAIL = 'CHAT_IS_CONNECTED_FAIL'
export const CHAT_CONNECT_REQUEST = 'CHAT_CONNECT_REQUEST'
export const CHAT_CONNECT_SUCCESS = 'CHAT_CONNECT_SUCCESS'
export const CHAT_CONNECT_FAIL = 'CHAT_CONNECT_FAIL'
export const CHAT_DISCONNECT_REQUEST = 'CHAT_DISCONNECT_REQUEST'
export const CHAT_DISCONNECT_SUCCESS = 'CHAT_DISCONNECT_SUCCESS'
export const CHAT_DISCONNECT_FAIL = 'CHAT_DISCONNECT_FAIL'
export const CHAT_PING_USER_REQUEST = 'CHAT_PING_USER_REQUEST'
export const CHAT_PING_USER_SUCCESS = 'CHAT_PING_USER_SUCCESS'
export const CHAT_PING_USER_FAIL = 'CHAT_PING_USER_FAIL'
export const CHAT_PING_SERVER_REQUEST = 'CHAT_PING_SERVER_REQUEST'
export const CHAT_PING_SERVER_SUCCESS = 'CHAT_PING_SERVER_SUCCESS'
export const CHAT_PING_SERVER_FAIL = 'CHAT_PING_SERVER_FAIL'
// QB Users
export const USERS_CREATE_REQUEST = 'USERS_CREATE_REQUEST'
export const USERS_CREATE_SUCCESS = 'USERS_CREATE_SUCCESS'
export const USERS_CREATE_FAIL = 'USERS_CREATE_FAIL'
export const USERS_UPDATE_REQUEST = 'USERS_UPDATE_REQUEST'
export const USERS_UPDATE_SUCCESS = 'USERS_UPDATE_SUCCESS'
export const USERS_UPDATE_FAIL = 'USERS_UPDATE_FAIL'
export const USERS_GET_REQUEST = 'USERS_GET_REQUEST'
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS'
export const USERS_GET_FAIL = 'USERS_GET_FAIL'
export const USERS_SELECT = 'USERS_SELECT'
export const USERS_BULK_SELECT = 'USERS_BULK_SELECT'
export const USERS_SET_FILTER = 'USERS_SET_FILTER'
export const USERS_SET_PAGE = 'USERS_SET_PAGE'
// QB Dialogs
export const DIALOGS_SET_FILTER = 'DIALOGS_SET_FILTER'
export const DIALOGS_UNREAD_COUNT_INCREMENT = 'DIALOGS_UNREAD_COUNT_INCREMENT'
export const DIALOGS_UNREAD_COUNT_DECREMENT = 'DIALOGS_UNREAD_COUNT_DECREMENT'
export const DIALOGS_GET_REQUEST = 'DIALOGS_GET_REQUEST'
export const DIALOGS_GET_SUCCESS = 'DIALOGS_GET_SUCCESS'
export const DIALOGS_GET_FAIL = 'DIALOGS_GET_FAIL'
export const DIALOGS_CREATE_REQUEST = 'DIALOGS_CREATE_REQUEST'
export const DIALOGS_CREATE_SUCCESS = 'DIALOGS_CREATE_SUCCESS'
export const DIALOGS_CREATE_FAIL = 'DIALOGS_CREATE_FAIL'
export const DIALOGS_CREATE_CANCEL = 'DIALOGS_CREATE_CANCEL'
export const DIALOGS_EDIT_REQUEST = 'DIALOGS_EDIT_REQUEST'
export const DIALOGS_EDIT_SUCCESS = 'DIALOGS_EDIT_SUCCESS'
export const DIALOGS_EDIT_FAIL = 'DIALOGS_EDIT_FAIL'
export const DIALOGS_EDIT_CANCEL = 'DIALOGS_EDIT_CANCEL'
export const DIALOGS_JOIN_REQUEST = 'DIALOGS_JOIN_REQUEST'
export const DIALOGS_JOIN_SUCCESS = 'DIALOGS_JOIN_SUCCESS'
export const DIALOGS_JOIN_FAIL = 'DIALOGS_JOIN_FAIL'
export const DIALOGS_LEAVE_REQUEST = 'DIALOGS_LEAVE_REQUEST'
export const DIALOGS_LEAVE_SUCCESS = 'DIALOGS_LEAVE_SUCCESS'
export const DIALOGS_LEAVE_FAIL = 'DIALOGS_LEAVE_FAIL'
export const DIALOGS_DELETE_REQUEST = 'DIALOGS_DELETE_REQUEST'
export const DIALOGS_DELETE_SUCCESS = 'DIALOGS_DELETE_SUCCESS'
export const DIALOGS_DELETE_FAIL = 'DIALOGS_DELETE_FAIL'
export const DIALOGS_SELECT = 'DIALOGS_SELECT'
export const DIALOGS_SELECT_RESET = 'DIALOGS_SELECT_RESET'
// QB Messages
export const MESSAGES_GET_REQUEST = 'MESSAGES_GET_REQUEST'
export const MESSAGES_GET_SUCCESS = 'MESSAGES_GET_SUCCESS'
export const MESSAGES_GET_FAIL = 'MESSAGES_GET_FAIL'
export const MESSAGES_MARK_READ_REQUEST = 'MESSAGES_MARK_READ_REQUEST'
export const MESSAGES_MARK_READ_SUCCESS = 'MESSAGES_MARK_READ_SUCCESS'
export const MESSAGES_MARK_READ_FAIL = 'MESSAGES_MARK_READ_FAIL'
export const MESSAGES_MARK_DELIVERED_REQUEST = 'MESSAGES_MARK_DELIVERED_REQUEST'
export const MESSAGES_MARK_DELIVERED_SUCCESS = 'MESSAGES_MARK_DELIVERED_SUCCESS'
export const MESSAGES_MARK_DELIVERED_FAIL = 'MESSAGES_MARK_DELIVERED_FAIL'
export const MESSAGES_SEND_REQUEST = 'MESSAGES_SEND_REQUEST'
export const MESSAGES_SEND_SUCCESS = 'MESSAGES_SEND_SUCCESS'
export const MESSAGES_SEND_FAIL = 'MESSAGES_SEND_FAIL'
export const MESSAGES_SYSTEM_SEND_REQUEST = 'MESSAGES_SYSTEM_SEND_REQUEST'
export const MESSAGES_SYSTEM_SEND_SUCCESS = 'MESSAGES_SYSTEM_SEND_SUCCESS'
export const MESSAGES_SYSTEM_SEND_FAIL = 'MESSAGES_SYSTEM_SEND_FAIL'
// QB file
export const FILE_UPLOAD_REQUEST = 'FILE_UPLOAD_REQUEST'
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS'
export const FILE_UPLOAD_FAIL = 'FILE_UPLOAD_FAIL'
export const FILE_GET_INFO_REQUEST = 'FILE_GET_INFO_REQUEST'
export const FILE_GET_INFO_SUCCESS = 'FILE_GET_INFO_SUCCESS'
export const FILE_GET_INFO_FAIL = 'FILE_GET_INFO_FAIL'
export const FILE_PUBLIC_URL_REQUEST = 'FILE_PUBLIC_URL_REQUEST'
export const FILE_PUBLIC_URL_SUCCESS = 'FILE_PUBLIC_URL_SUCCESS'
export const FILE_PUBLIC_URL_FAIL = 'FILE_PUBLIC_URL_FAIL'
export const FILE_PRIVATE_URL_REQUEST = 'FILE_PRIVATE_URL_REQUEST'
export const FILE_PRIVATE_URL_SUCCESS = 'FILE_PRIVATE_URL_SUCCESS'
export const FILE_PRIVATE_URL_FAIL = 'FILE_PRIVATE_URL_FAIL'
// QB Info
export const GET_INFO_REQUEST = 'GET_INFO_REQUEST'
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS'
export const GET_INFO_FAIL = 'GET_INFO_FAIL'
// Device UDID for Push notifications
export const DEVICE_UDID_SET = 'DEVICE_UDID_SET'
export const DEVICE_UDID_REMOVE = 'DEVICE_UDID_REMOVE'