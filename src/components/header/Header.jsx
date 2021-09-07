import React from 'react'
import css from '../header/header.module.css'
import Ava from '../../img/Alymov.jpg'

function Header() {
    return (
        <div className={css.wrap}>
            <div className={css.ava_wrap}>
                <div className={css.ava_img}>
                    <img src={Ava} alt="avatar" />
                </div>
                <div>
                    <div className={css.lenta}></div>
                    <div className={css.lenta1}></div>
                </div>
                <div className={css.item}>Адилет <br /> Алымов</div>
            </div>
        </div>
    )
}

export default Header;