import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__container">
                <li className="footer__list-menu">
                    <Link to="/">Tesla &copy; 2022</Link>
                </li>
                <li className="footer__list-menu">
                    <Link to="/">Privacy & Legal</Link>
                </li>
                <li className="footer__list-menu">
                    <Link to="/">Contact</Link>
                </li>
                <li className="footer__list-menu">
                    <Link to="/">Careers</Link>
                </li>
                <li className="footer__list-menu">
                    <Link to="/">News</Link>
                </li>
                <li className="footer__list-menu">
                    <Link to="/">Engage</Link>
                </li>
                <li className="footer__list-menu">
                    <Link to="/">Locations</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
