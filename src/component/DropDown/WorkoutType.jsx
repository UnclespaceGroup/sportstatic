import React from 'react'
import s from './WorkoutType.module.scss'
import Table from '../Table/Table'
import AddForm from '../AddForm/AddForm'

class WorkoutType extends React.Component {
  state = {
    open: false
  }

  render () {
    const {
      props: {
        title,
        image,
        description,
        id
      },
      state: {
        open
      },
      click
    } = this
    return (
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.wrapper}>
              <div className={s.image} style={{backgroundImage: `url(${image})`}} />
            </div>
          </div>
          <div className={s.col}>
            <div className={s.wrapper}>
              <div className={s.header} onClick={click}>{title}</div>
              <div className={s.description}>{description}</div>
              <div className={s.form}>
                <AddForm {...{id, title, type: 'gim'}} />
              </div>
              <div className={s.result}>
                <div className={s.buttonResult} onClick={click}>{open ? 'Скрыть результаты' : 'Показать результаты'}</div>
                <Table {...{type: 'gim'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  click = () => {
    this.setState({
      open: !this.state.open
    })
  }
}

export default WorkoutType
