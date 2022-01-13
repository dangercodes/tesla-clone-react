import React from 'react'
import './SidebarAccount.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
import  { useNavigate  } from 'react-router-dom';
 
function SidebarAccount() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutOfApp = () => {
        auth
            .signOut()
            .then(() => {
                dispatch(
                    logout()
                )
                navigate('/')
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className="sidebarAccount">
            <ul className="sidebarAccount__box-menu">
                <li className="sidebarAccount__list-menu">
                    <Link to="#" className="active sidebarAccount__link-menu">
                        <div className="sidebarAccount__box-icon-menu">
                            <HomeOutlinedIcon />
                        </div>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#" className="sidebarAccount__link-menu">
                        <div className="sidebarAccount__box-icon-menu">
                            <PermIdentityOutlinedIcon />
                        </div>
                        <span>Profile Settings</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#" className="sidebarAccount__link-menu">
                        <div className="sidebarAccount__box-icon-menu">
                            <PaymentOutlinedIcon />
                        </div>
                        <span>Payment Method</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#" className="sidebarAccount__link-menu">
                        <div className="sidebarAccount__box-icon-menu">
                            <BoltOutlinedIcon />
                        </div>
                        <span>Charging</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <Link to="#" className="sidebarAccount__link-menu">
                        <div className="sidebarAccount__box-icon-menu">
                            <ShoppingBagOutlinedIcon />
                        </div>
                        <span>Order History</span>
                    </Link>
                </li>
                <li className="sidebarAccount__list-menu">
                    <div className="sidebarAccount__link-menu" onClick={() => logoutOfApp()}>
                        <div className="sidebarAccount__box-icon-menu">
                            <LogoutOutlinedIcon />
                        </div>
                        <span>Sign Out</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SidebarAccount
