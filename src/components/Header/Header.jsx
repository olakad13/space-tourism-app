import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"
import Hamburger from "../../assets/icon-hamburger.svg"
import Logo from "../../assets/logo.svg"
import CloseIcon from "../../assets/icon-close.svg"
import { useState, useRef } from 'react'

const Header = () => {

    const navContainer = useRef(null)

    const handleClick = (event) => {
        
        if (event.target.id === "hamburger") {
            navContainer.current.classList.add(styles.slideIn)
        } else if (event.target.id === "closeBtn") {
            navContainer.current.classList.remove(styles.slideIn)
        }
    }
    
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <img src={Logo} alt="" />
            </div>

            <button id="hamburger" className={styles.hamburger} onClick={handleClick}>
                <img src={Hamburger} alt="" />
            </button>

            <nav  className={styles.navContainer} ref={navContainer}>
                <button id="closeBtn" className={styles.closeBtn} onClick={handleClick}>
                     <img src={CloseIcon} alt="" />
                </button>

                <NavLink to="/">
                    <span className={styles.index}>00</span>
                    HOME
                </NavLink>

                <NavLink to="/destination">
                    <span className={styles.index}>01</span>
                    DESTINATION
                </NavLink>

                <NavLink to="/crew">
                    <span className={styles.index}>02</span>
                    CREW
                </NavLink>

                <NavLink to="/technology">
                    <span className={styles.index}>03</span>
                    TECHNOLOGY
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;