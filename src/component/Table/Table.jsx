import React from 'react'
import s from './Table.module.scss'
import TableDay from './TableDay'
import { bindActionCreators } from 'redux'
import { AddResult } from '../../actions'
import { connect } from 'react-redux'
import _ from 'lodash'

class Table extends React.Component {
  render () {
    const {
      props: {
        profile,
        type
      }
    } = this
    return (
      <div className={s.container}>
        {
          _.map(profile[type],(day, key) =>
            <TableDay key={key} {...day} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddResult: bindActionCreators(AddResult, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
