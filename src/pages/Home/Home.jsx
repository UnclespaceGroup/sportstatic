import React from 'react'
import s from './Home.module.scss'
import Card from '../../component/Card/Card'

class Home extends React.Component {
  render () {
    const {
      props: {
        cards
      }
    } = this
    return (
      <div className={s.container}>
        <div className={s.title}>Выбери тип тренировки</div>
        <div className={s.row}>
          {
            cards.map((item, key) =>
              <div key={key} className={s.col}>
                <Card {...item} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Home
