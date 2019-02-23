import React from 'react'
import s from './Workout.module.scss'
import WorkoutType from '../../component/WorkoutType/WorkoutType'
import _ from 'lodash'

class Workout extends React.Component {
  render () {
    const {
      props: {
        title,
        types,
        id
      }
    } = this
    return (
      <div className={s.container}>
        <div className={s.title}>{title}</div>
        <div className={s.wrapper}>
          {
            _.map(types, (type, key)=>
              <WorkoutType key={key} {...{...type, id}} />
            )
          }
        </div>
      </div>
    )
  }
}

export default Workout
