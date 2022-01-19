import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer({listMenus}) {

    const listItems = listMenus.map((listMenu) =>
        <li className="footer__list-menu" key={listMenu.id}>
            <Link to={listMenu.link}>{listMenu.menu}</Link>
        </li>
    );

    return (
        <div className="footer">
            <ul className="footer__container">
                {listItems}
            </ul>
        </div>
    )
}

export default Footer
