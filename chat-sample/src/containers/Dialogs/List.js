import { connect } from 'react-redux'

import DialogsList from '../../components/Dialogs/List'
import { dialogSelect } from '../../actionCreators'
import { getDialogs } from '../../thunks'

const mapStateToProps = ({ dialogs }, { exclude = [] }) => {
  const { dialogs: data, limit, loading, selected, skip, total } = dialogs
  data.sort((a, b) => (
    (b.lastMessageDateSent || 0) - (a.lastMessageDateSent || 0)
  ))
  return {
    dialogs: exclude.length ?
      data.filter(dialog => exclude.indexOf(dialog.id) === -1) :
      data,
    limit,
    loading,
    selected,
    skip,
    total,
  }
}

const mapDispatchToProps = {
  getDialogs,
  selectDialog: dialogSelect,
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsList)