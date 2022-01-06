import React from 'react'
import './Menu.scss'
import MenuItem from '../MenuItem/MenuItem'
import CloseIcon from '@material-ui/icons/Close';

function Menu({ isMenuOpen, setIsMenuOpen }) {

    const triggerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.remove('no-scroll');
    }

    return (
        <div className={isMenuOpen ? "box-menu show" : "box-menu"}>
            <div className={isMenuOpen ? "menu show" : "menu"}>
                <div className="close-menu" onClick={() => triggerMenu()}>
                    <CloseIcon/>
                </div>
                <MenuItem title="existing inventory" />
                <MenuItem title="used inventory" />
                <MenuItem title="trade-in" />
                <MenuItem title="test drive" />
                <MenuItem title="cybertruck" />
                <MenuItem title="roadster" />
                <MenuItem title="semi" />
                <MenuItem title="charging" />
                <MenuItem title="powerwall" />
                <MenuItem title="commercial energy" />
                <MenuItem title="utilities" />
                <MenuItem title="find us" />
                <MenuItem title="support" />
                <MenuItem title="investor relations" />
                <MenuItem title="united states" />
            </div>
            <div className={isMenuOpen ? "menu-backdrop show" : "menu-backdrop"}></div>
        </div>
    )
}

export default Menu
