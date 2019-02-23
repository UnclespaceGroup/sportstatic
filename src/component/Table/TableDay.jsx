import React from 'react'
import s from './Table.module.scss'
import _ from 'lodash'

class TableDay extends React.Component{
  render (){
    const {
      props: {
        approach,
        date
      }
    } = this
    return (
      <div className={s.wrapper}>
        <div className={s.date}>{date}</div>
        {
          _.map(approach, (item, key) =>
              <div className={s.item} key={key}>
                <div className={s.mass}>масса {item.mass} кг</div>
                <div className={s.count}>поднял {item.count} раз</div>
              </div>
            )
        }
      </div>
    )
  }
}
export default TableDay
