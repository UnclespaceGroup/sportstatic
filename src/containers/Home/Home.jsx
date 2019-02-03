import React from 'react'
import s from './Home.module.scss'
import Card from '../../component/Card/Card'
import im1 from '../../static/body1.jpg'
import im2 from '../../static/body2.jpg'
import im3 from '../../static/body3.jpg'
import im4 from '../../static/body4.jpg'

const cards = [
  {
    title: 'обычная тренировка',
    description: 'Сожми ягодицы, что позволит держать все тело в безопасном для поясницы положении. ',
    image: im1,
    url: '/',
    type: 'элементарная тренировка'
  },
  {
    title: 'обычная тренировка',
    description: 'Напряги мышцы поясничного отдела (те, что разгибают позвоночник), сведи лопатки, опусти плечи, подай грудь вперед. ',
    image: im2,
    url: '/Register',
    type: 'элементарная тренировка'
  },
  {
    title: 'обычная тренировка',
    description: 'Опускаясь в упор лежа, ты должен прикоснуться грудью к полу, после чего задействуй мышцы ног по полной, чтобы выпрыгнуть.',
    image: im3,
    url: '/Register',
    type: 'элементарная тренировка'
  },
  {
    title: 'Тренировка для начинающих',
    description: 'Драка началась — ты бьешь невидимку, а он уклонился. Ты закрылся, разорвал дистанцию, ушел под его слабую руку и пробил двойку. ',
    image: im4,
    url: '/Register',
    type: 'Lite режим'
  }
]

class Home extends React.Component {
  render () {
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
