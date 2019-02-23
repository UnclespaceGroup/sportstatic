import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import { connect } from 'react-redux'
import Workout from '../pages/Workout/Workout'


class WorkoutContainer extends React.Component {
  render () {
    const {
      props: {
        cards
      }
    } = this
    // Это id карточки, которую хочешь показать
    const number = this.props.match.params.number

    // Это поиск из все карточек карточки с твоим id
    const current = cards.find(card => card.id.toString() === number)
    return (
      <Workout {...current} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)
