import React from 'react'
import css from './content.module.css'

function Content() {
    return (
        <div className={css.content_wrap}>
            <div className={css.content}>
                <div>
                    <div className={css.title}>Желаемая должность</div>
                    <div className={css.subTitle}>
                        <div className={css.ribbon}></div>
                        <div className={css.descrip}>
                            Front-End Developer
                        </div>
                    </div>
                </div>
                <div>
                    <div className={css.title}>Образование</div>
                    <div className={css.subTitle}>
                        <div className={css.ribbon}></div>
                        <div className={css.descrip}>
                            <h3>Бишкекский Гуманитарный Университет 2013-2017</h3>
                            Бакалавр. Кыргызско-китайский факультет. Международные отношения.
                        </div>
                    </div>
                </div>
                <div>
                    <div className={css.title}>Достижения</div>
                    <div className={css.subTitle}>
                        <div className={css.ribbon}></div>
                        <div className={css.descrip}>
                            <h3>Областная олимпиада по физике 2013</h3>
                            2-е место.
                        </div>
                    </div>
                </div>
                <div>
                    <div className={css.title}>Проделанные работы</div>
                    <div className={css.subTitle}>
                        <div className={css.ribbon}></div>
                        <div className={css.descrip}>
                            <h3>GIFT ME</h3>
                            Сайт для обмена подарками. Использованные технологии: React,
                            Redux, Axios, Git, HTML, Css Ссылка на проект:
                            https://github.com/CodifyLaboratory/giftme_frontend
                            <h3>HELLO IT</h3>
                            Образовательный сайт. Использованные технологии: React,
                            Redux, Git, HTML, Css, TypeScript Ссылка на проект:
                            https://github.com/Amanbek22/hello-frontend
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.sideBar}>
                <div>
                    <div className={css.title1}>Контакты</div>
                    <div className={css.subTitle1}>
                        <div className={css.descrip1}>
                            <div className={css.contacts}>тел.: +996500960950</div>
                            <div className={css.contacts}>e-mail: alymovadilet1996@gmail.com</div>
                            <div className={css.contacts}>Адрес проживания: г.Бишкек</div>
                        </div>
                        <div className={css.ribbon1}></div>
                    </div>
                </div>
                <div>
                    <div className={css.title1}>О себе</div>
                    <div className={css.subTitle1}>
                        <div className={css.about}>
                            Возраст: 25 лет.
                            Хочу стать профессионалом
                            своего дела. Готов обучаться и
                            расти в сфере IT.
                        </div>
                        <div className={css.ribbon1}></div>
                    </div>
                </div>
                <div>
                    <div className={css.title1}>Языки</div>
                    <div className={css.subTitle1}>
                        <div className={css.descrip1}>
                            <h3>Русский</h3>
                            <h3>Английский</h3>
                            <h3>Китайский</h3>
                        </div>
                        <div className={css.ribbon1}></div>
                    </div>
                </div>
                <div>
                    <div className={css.title1}>Навыки</div>
                    <div className={css.subTitle1}>
                        <div className={css.descrip1}>
                            <h3>HTML, CSS</h3>
                            <h3>Java Script, React</h3>
                            <h3>Git</h3>
                            <h3>TypeScript</h3>
                        </div>
                        <div className={css.ribbon1}></div>
                    </div>
                </div>
                <div>
                    <div className={css.title1}>Курсы</div>
                    <div className={css.subTitle1}>
                        <div className={css.descrip1}>
                            <h3>CODIFYLAB</h3>
                            Java Script
                            <h3>АНЬШАНЬСКИЙ ПЕДАГОГИЧЕСКИЙ ИНСТИТУТ, КИТАЙ</h3>
                            Курсы китайского языка
                        </div>
                        <div className={css.ribbon1}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Content;