import React from 'react'
import s from './LiteTraining.module.scss'

class LiteTraining extends React.Component {
  render () {
    const {
      description,
      title,

    } = data
    return (
      <div>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>

      </div>
    )
  }
}

export default LiteTraining

const data = {
  title: 'Легкая',
  description:'Драка началась — ты бьешь невидимку, а он уклонился. Ты закрылся, разорвал дистанцию, ушел под его слабую руку и пробил двойку.',


}
