import React, { useState, useEffect } from 'react'
import './ProfileSetting.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SidebarAccount from '../../Components/SidebarAccount/SidebarAccount'
import {Container, Row, Col} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate  } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { SEO } from '../../Helpers/SEO';

function ProfileSetting() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

    const sideMenuAccount = [
        {id: "1", menu: "Dashboard", link: "/teslaaccount", class:"", icon: "HomeOutlinedIcon"}, 
        {id: "2", menu: "Profile Settings", link: "/profilesettings", class:"active", icon: "PermIdentityOutlinedIcon"},
        {id: "3", menu: "Payment Method", link: "/", class:"", icon: "PaymentOutlinedIcon"},
        {id: "4", menu: "Charging", link: "/", class:"", icon: "BoltOutlinedIcon"},
        {id: "5", menu: "Order History", link: "/", class:"", icon: "ShoppingBagOutlinedIcon"}];

    useEffect(() => {
        SEO({
            title: 'Profile | Tesla',
            metaDescription: 'Profile Page'
        });
    }, []);
        

    return (
        <div className="profile">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={false} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="accountContentWrapper">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <SidebarAccount listMenus={sideMenuAccount} />
                        </Col>
                        <Col lg="9">
                            {/* <Dashboard /> */}
                            {/* { user ? <Dashboard /> : <Navigate to="/login" /> } */}
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer listMenus={menuFooter} />
        </div>
    )
}

export default ProfileSetting
