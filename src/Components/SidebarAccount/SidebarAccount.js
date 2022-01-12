import React from 'react'
import './SidebarAccount.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
 
function SidebarAccount() {
    return (
        <div className="sidebarAccount">
            <ul className="sidebarAccount__box-menu">
                <li className="sidebarAccount__list-menu">
                    <Link to="#" className="active">
                        <div className="sidebarAccount__box-icon-menu">
                            <HomeOutlinedIcon />
                        </div>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#">
                        <div className="sidebarAccount__box-icon-menu">
                            <PermIdentityOutlinedIcon />
                        </div>
                        <span>Profile Settings</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#">
                        <div className="sidebarAccount__box-icon-menu">
                            <PaymentOutlinedIcon />
                        </div>
                        <span>Payment Method</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#">
                        <div className="sidebarAccount__box-icon-menu">
                            <BoltOutlinedIcon />
                        </div>
                        <span>Charging</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#">
                        <div className="sidebarAccount__box-icon-menu">
                            <ShoppingBagOutlinedIcon />
                        </div>
                        <span>Order History</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#">
                        <div className="sidebarAccount__box-icon-menu">
                            <LogoutOutlinedIcon />
                        </div>
                        <span>Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarAccount
