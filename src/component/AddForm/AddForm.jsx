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
      state: {
        mass,
        count
      },
      change,
      click
    } = this
    return (
      <div className={s.container}>
        <div className={s.wrapper}>
          <input className={s.text}
                 onChange={(e) => {change(e, 'mass')}}
                 value={mass}
                 type={'number'}
                 placeholder={'Масса'}
          />
          <input className={s.text}
                 onChange={(e) => {change(e, 'count')}}
                 value={count}
                 type={'number'}
                 placeholder={'Количество подходов'}
          />
        </div>
        <div
          className={s.button}
          onClick={click}
        >Сохранить
        </div>
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

    if (!(mass && count) || (mass <= 0 || count <= 0)) return

    this.props.AddResult({
      mass,
      count,
      type: this.props.type
    })
    this.setState({
      mass: '',
      count: ''
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
