import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  render () {
    const {
      props: {
        title,
        description,
        image,
        url,
        type
      }
    } = this
    return (
      <Link to={url}>
        <div className={s.container} style={{backgroundImage: `url(${image})`}}>
          <div className={s.mask}>
            <div className={s.title}>{title}</div>
            <div className={s.type}>{type}</div>
            <div className={s.description}>{description}</div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Card



