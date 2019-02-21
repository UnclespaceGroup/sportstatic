import React from 'react'
import s from './Header.module.scss'


class Header extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.buttons}>
                    <div className={s.menu}>
                        <button className={s.buttonMenu}>Меню</button>
                    </div>
                    <div className={s.result}>
                        <button className={s.buttonResult}>Результат</button>
                    </div>
                </div>

            </div>
        )

    }
}

export default Header