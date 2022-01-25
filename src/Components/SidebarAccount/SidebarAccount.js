import React from 'react'
import './SidebarAccount.scss'
import BaseSidebarAccount from '../BaseSidebarAccount/BaseSidebarAccount'
import { useLocation } from "react-router-dom"

function SidebarAccount() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const ConfigSidebarAccount = [
            {id: "1", menu: "Dashboard", link: "/teslaaccount", class:splitLocation[1] === "teslaaccount" ? "active" : "", icon: "HomeOutlinedIcon"}, 
            {id: "2", menu: "Profile Settings", link: "/profilesettings", class:splitLocation[1] === "profilesettings" ? "active" : "", icon: "PermIdentityOutlinedIcon"},
            {id: "3", menu: "Payment Method", link: "/payment-method", class:splitLocation[1] === "payment-method" ? "active" : "", icon: "PaymentOutlinedIcon"},
            {id: "4", menu: "Charging", link: "/", class:splitLocation[1] === "charging" ? "active" : "", icon: "BoltOutlinedIcon"},
            {id: "5", menu: "Order History", link: "/", class:splitLocation[1] === "order-history" ? "active" : "", icon: "ShoppingBagOutlinedIcon"}];
    
    return (
        <div>
            <BaseSidebarAccount listMenus={ConfigSidebarAccount} />
        </div>
    )
}

export default SidebarAccount
