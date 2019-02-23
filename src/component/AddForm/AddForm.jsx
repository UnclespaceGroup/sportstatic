import React from 'react'
import s from './AddForm.module.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AddResult } from '../../actions'

class AddForm extends React.Component {
  state = {
    mass: '',
    count: ''
  }

  render () {
    const {
      props: {
        title
      },
      state: {
        mass,
        count
      },
      change,
      click
    } = this
    return (
      <div className={s.container}>
        <div className={s.title}>{title}</div>
        <input className={s.text}
               onChange={(e) => {change(e,'mass')}}
               value={mass}
               placeholder={'Масса'}
        />
        <input className={s.text}
               onChange={(e) => {change(e,'count')}}
               value={count}
               placeholder={'Количество подходов'}
        />
        <div
          className={s.button}
          onClick={click}
        >Сохранить</div>
      </div>
    )
  }

  change = (val, type) => {
    this.setState({
      [type]: val.target.value
    })
  }
  click = () => {
    const {
      state: {
        mass,
        count
      }
    } = this

    this.props.AddResult({
      mass,
      count,
      type: this.props.type
    })
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddResult: bindActionCreators(AddResult, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
