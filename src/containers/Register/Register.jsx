import React from 'react'
import Login from '../../component/Login/Login'

class Register extends React.Component {
  render (){
    return (
      <div>
        <Login
          title={'Вход'}
          buttonName={'Отправить'}
        />
      </div>
    )
  }
}
export default Register
