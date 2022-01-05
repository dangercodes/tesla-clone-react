import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import { Image } from "react-bootstrap"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header({ isMenuOpen, setIsMenuOpen }) {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <Image src="assets/images/logo-tesla.svg" className="header__logoImg" alt="logo-tesla" />
                </Link>
            </div>
            <div className="header__links">
                <Link to="/">Model S</Link>
                <Link to="/">Model 3</Link>
                <Link to="/">Model X</Link>
                <Link to="/">Model Y</Link>
                <Link to="/">Solar Roof</Link>
                <Link to="/">Solar Panels</Link>
            </div>
            <div className="header__right">
                <Link to="/" className={isMenuOpen && 'header__link--hidden'}>Shop</Link>
                <Link to="/login" className={isMenuOpen && 'header__link--hidden'}>Account</Link>
                <div className="header__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon/> : "Menu"}
                </div>
            </div>
        </div>
    )
}

export default Header
