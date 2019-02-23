import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import Home from '../pages/Home/Home'
import { connect } from 'react-redux'


class HomeContainer extends React.Component {
  render () {
    const {
      props: {
        ...props
      }
    } = this
    return (
      <Home {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
