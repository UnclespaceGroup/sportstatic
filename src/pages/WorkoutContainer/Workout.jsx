import React from 'react'
import s from './Workout.module.scss'

class Workout extends React.Component {
  render () {
    const {
      props: {
        title
      }
    } = this
    return (
      <div className={s.container}>
        <div className={s.title}>{title}</div>
      </div>
    )
  }
}

export default Workout
