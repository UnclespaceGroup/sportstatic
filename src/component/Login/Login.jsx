import React from 'react'
import s from './Login.module.scss'
import { withRouter  } from 'react-router'

class Login extends React.Component{
  state = {
    login: ''
  }
  render (){
    const {
      props: {
        title,
        buttonName
      },
      state: {
        login
      },
      change,
      click
    } = this
    return (
      <div className={s.container}>
        <div className={s.title}>{title}</div>
        <input className={s.text}
          onChange={change}
          value={login}
          placeholder={'Введите Email'}
        />
        <div
          className={s.button}
          onClick={click}
        >{buttonName}</div>
      </div>
    )
  }
  change = (val) => {
    this.setState({
      login: val.target.value
    })
  }
  click = () => {
    console.log(this.props)
    if(this.state.login === 'denis') {
      alert("Добро пожаловать, Тайлер Дерден")
      this.props.history.push('/')
    }
    else
      alert('Пошел в жопу, урод, ты ещё не готов')
  }
}
export default withRouter(Login)
