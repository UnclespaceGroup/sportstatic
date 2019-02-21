import React from 'react'
import s from './CardForm1.module.scss'
import Header from "../../component/Header/Header"

class CardForm1 extends React.Component {
    render () {
        return (
            <div>
                <Header/>
            <div className={s.container}>
                <div className={s.title}>Результат</div>
                </div>
            </div>
        )
    }
}

export default CardForm1