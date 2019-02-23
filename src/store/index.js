import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import im1 from '../static/body1.jpg'
import im2 from '../static/body2.jpg'
import im3 from '../static/body3.jpg'
import im4 from '../static/body4.jpg'

export const initialStore = {
  cards: [
    {
      id: 0,
      title: 'Тяжелая атлетика',
      description: 'Сожми ягодицы, что позволит держать все тело в безопасном для поясницы положении. ',
      image: im1,
      url: '/workout/1',
      type: 'Занятия в зале',
      types: [
        {
          typeId: 0,
          title: 'Жим лежа',
          description: 'Жим лежа – базовое упражнение для развития силы груди и рук. Это обязательный элемент любой программы на силу и массу. Именно в этом ' +
            'упражнении атлет работает с действительно большими весами, как и в приседе, становой тяге.',
          image: im1
        }
      ]
    },
    {
      id: 1,
      title: 'обычная тренировка',
      description: 'Напряги мышцы поясничного отдела (те, что разгибают позвоночник), сведи лопатки, опусти плечи, подай грудь вперед. ',
      image: im2,
      url: '/workout/2',
      type: 'элементарная тренировка'
    },
    {
      id: 2,
      title: 'обычная тренировка',
      description: 'Опускаясь в упор лежа, ты должен прикоснуться грудью к полу, после чего задействуй мышцы ног по полной, чтобы выпрыгнуть.',
      image: im3,
      url: '/workout/2',
      type: 'элементарная тренировка'
    },
    {
      id: 3,
      title: 'Тренировка для начинающих',
      description: 'Драка началась — ты бьешь невидимку, а он уклонился. Ты закрылся, разорвал дистанцию, ушел под его слабую руку и пробил двойку. ',
      image: im4,
      url: '/workout/3',
      type: 'Lite режим'
    }
  ],
  profile: {
    gim: {
      today: {
        date: 'Сегодня',
        approach: {
          1: {
            mass: 25,
            count: 10
          }
        }
      },
      yesterday: {
        date: 'Вчера',
        approach: {
          1: {
            mass: 20,
            count: 11
          }
        }
      }
    }
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)