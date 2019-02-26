import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import im1 from '../static/body1.jpg'
import im2 from '../static/body2.jpg'
import im3 from '../static/body3.jpg'
import im4 from '../static/body4.jpg'

import pris1 from '../static/pris1.jpg'
import stan from '../static/stan1.jpg'
import beg from '../static/beg.jpg'
import us from '../static/us.jpg'
import skak from '../static/skak.jpg'

export const initialStore = {
  cards: [
    {
      id: 0,
      title: 'Тяжелая атлетика',
      description: 'Только для серьёзных парней',
      image: im1,
      url: '/workout/0',
      type: 'Занятия в зале',
      types: [
        {
          typeId: 0,
          type: 'gim',
          title: 'Жим лежа',
          description: 'Жим лежа – базовое упражнение для развития силы груди и рук. Это обязательный элемент любой программы на силу и массу. Именно в этом ' +
            'упражнении атлет работает с действительно большими весами, как и в приседе, становой тяге.',
          image: im1
        },
        {
          typeId: 1,
          type: 'stan',
          title: 'Становая тяга',
          description: 'Логика выполнения становой тяги, по сути, проста — необходимо поднять штангу с пола. Однако все не так просто, и неправильное распределение нагрузки перегружает не только позвоночник, провоцируя боли в пояснице, но и ставит под удар суставы. ' +
            'При этом чем больший рабочий вес используется при выполнении упражнения, тем сильнее могут навредить даже малейшие ошибки техники.',
          image: stan
        },
        {
          typeId: 1,
          type: 'pris',
          title: 'Приседание со штангой',
          description: 'Логика выполнения становой тяги, по сути, проста — необходимо поднять штангу с пола. Однако все не так просто, и неправильное распределение нагрузки перегружает не только позвоночник, провоцируя боли в пояснице, но и ставит под удар суставы. ' +
            'При этом чем больший рабочий вес используется при выполнении упражнения, тем сильнее могут навредить даже малейшие ошибки техники.',
          image: pris1
        }
      ]
    },
    {
      id: 1,
      title: 'Кардио тренировки',
      description: 'Кардио-тренировка (или аэробная тренировка) происходит за счет энергии, которая добывается в ходе окисления молекул глюкозы кислородом.',
      image: im2,
      url: '/workout/1',
      type: 'элементарная тренировка',
      types: [
        {
          typeId: 0,
          type: 'simple1',
          title: 'Бег',
          description: 'Один из способов передвижения (локомоции) человека и животных; отличается наличием так называемой «фазы полёта» и осуществляется в результате сложной координированной деятельности скелетных мышц и конечностей.',
          image: beg
        },
        {
          typeId: 1,
          type: 'simple2',
          title: 'Скакалка',
          description: 'Скакалка идеально подходит для спортивных упражнения с целью похудения, для подтянутого живота, для избавления от целлюлита',
          image: skak
        }
      ]
    },
    {
      id: 2,
      title: 'Обычная тренировка',
      description: 'Стандартный надор упражнений на все случаи жизни',
      image: im3,
      url: '/workout/2',
      type: 'элементарная тренировка',
      types: [
        {
          typeId: 0,
          type: 'simple4',
          title: 'Жим лежа',
          description: 'Жим лежа – базовое упражнение для развития силы груди и рук. Это обязательный элемент любой программы на силу и массу. Именно в этом ' +
            'упражнении атлет работает с действительно большими весами, как и в приседе, становой тяге.',
          image: im1
        },
        {
          typeId: 1,
          type: 'simple5',
          title: 'Становая тяга',
          description: 'Логика выполнения становой тяги, по сути, проста — необходимо поднять штангу с пола. Однако все не так просто, и неправильное распределение нагрузки перегружает не только позвоночник, провоцируя боли в пояснице, но и ставит под удар суставы. ' +
            'При этом чем больший рабочий вес используется при выполнении упражнения, тем сильнее могут навредить даже малейшие ошибки техники.',
          image: im2
        },
        {
          typeId: 1,
          type: 'simple6',
          title: 'Приседание со штангой',
          description: 'Логика выполнения становой тяги, по сути, проста — необходимо поднять штангу с пола. Однако все не так просто, и неправильное распределение нагрузки перегружает не только позвоночник, провоцируя боли в пояснице, но и ставит под удар суставы. ' +
            'При этом чем больший рабочий вес используется при выполнении упражнения, тем сильнее могут навредить даже малейшие ошибки техники.',
          image: im3
        }
      ]
    },
    {
      id: 3,
      title: 'Тренировка для начинающих',
      description: 'Все с чего то должны начинать ',
      image: im4,
      url: '/workout/3',
      type: 'Lite режим',
      types: [
        {
          typeId: 0,
          type: 'simple7',
          title: 'Гантели',
          description: 'Гантели – базовое упражнение для развития силы груди и рук. Это обязательный элемент любой программы на силу и массу. Именно в этом ' +
            'упражнении атлет работает с действительно большими весами, как и в приседе, становой тяге.',
          image: us
        }
      ]
    }
  ],
  profile: {
    gim: {
      '2019/02/23': {
        date: '2019/02/23',
        approach: [
          {
            mass: 10,
            count: 7
          },
          {
            mass: 15,
            count: 9
          },
          {
            mass: 15,
            count: 7
          }
        ]
      }
    },
    stan: {

    },
    pris: {

    },
    simple1: {

    },
    simple2: {

    },
    simple3: {

    },
    simple4: {

    },
    simple5: {

    },
    simple6: {

    },
    simple7: {

    },
    simple8: {

    },
    simple9: {

    }
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)