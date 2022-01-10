import React from 'react'
import './HeaderLogin.scss'
import { Link } from 'react-router-dom'
import { Image } from "react-bootstrap"
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined"

function HeaderLogin() {
    return (
        <div className="loginHeader">
            <div className="loginHeader__logo">
                <Link to="/">
                    <Image src="assets/images/logo-tesla.svg" alt="logo-tesla" className="logo-img" />
                </Link>
            </div>
            <div className="loginHeader__language">
                <LanguageOutlinedIcon />
                <span>en-US</span>
            </div>
        </div>
    )
}

export default HeaderLogin
