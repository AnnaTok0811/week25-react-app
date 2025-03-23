// import React from 'react'

import st from './Header.module.scss'
import {
    NavLink
} from 'react-router-dom'
export default function Header() {
    return ( 
        //
        <div className={st.container}>
            <div className={st.logo}
             style={{ textDecoration: 'none', color: '#00072d' }}><img className={st.img} src='../../../public/assets/logo.png' alt='logo' />              
            </div>
            <div className={st.title} style={{ textDecoration: 'none', color: '#00072d' }}>Simple words</div> 
            <div className={st.nav}>
                <div className={st.link}><NavLink to="/wordlist" style={{ textDecoration: 'none', color: '#00072d' }}>Список слов</NavLink></div>
                <div className={st.link}><NavLink to="/cards" style={{ textDecoration: 'none', color: '#00072d' }}>Карточки</NavLink></div>
            </div>
        </div>
        
        )
}


