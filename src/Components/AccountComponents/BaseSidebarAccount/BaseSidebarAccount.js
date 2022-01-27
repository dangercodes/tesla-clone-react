import React from 'react'
import './BaseSidebarAccount.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../../features/userSlice'
import  { useNavigate  } from 'react-router-dom';
 
function BaseSidebarAccount({listMenus}) {
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

    const listItems = listMenus.map((listMenu) =>
        <li className="sidebarAccount__list-menu" key={listMenu.id}>
            <Link to={listMenu.link} className={listMenu.class + ' sidebarAccount__link-menu'}>
                <div className="sidebarAccount__box-icon-menu">
                    {listMenu.icon === "HomeOutlinedIcon" ? <HomeOutlinedIcon /> 
                      : listMenu.icon === "PermIdentityOutlinedIcon" ? <PermIdentityOutlinedIcon />
                      : listMenu.icon === "PaymentOutlinedIcon" ? <PaymentOutlinedIcon />
                      : listMenu.icon === "BoltOutlinedIcon" ? <BoltOutlinedIcon />
                      : listMenu.icon === "ShoppingBagOutlinedIcon" ? <ShoppingBagOutlinedIcon />
                      : <HomeOutlinedIcon />
                    }
                </div>
                <span>{listMenu.menu}</span>
            </Link>
        </li>
    );

    return (
        <div className="sidebarAccount">
            <ul className="sidebarAccount__box-menu">
                {listItems}
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

export default BaseSidebarAccount
