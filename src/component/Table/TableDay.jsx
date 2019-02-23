import React from 'react'
import s from './Table.module.scss'
import _ from 'lodash'

class TableDay extends React.Component {
  render () {
    const {
      props: {
        approach,
        date
      }
    } = this
    return (
      <div className={s.wrapper}>
        <div className={s.date}>{date}</div>
        <div className={s.table}>
          <div className={s.header}>
            <div className={s.number}>Подход</div>
            <div className={s.mass}>Масса</div>
            <div className={s.count}>Количество</div>
          </div>
          {
            _.map(approach, (item, key) =>
              <div className={s.item} key={key}>
                <div className={s.number}>{key + 1}</div>
                <div className={s.mass}>{item.mass} кг</div>
                <div className={s.count}>{item.count} раз</div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default TableDay
