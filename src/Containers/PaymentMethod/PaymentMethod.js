import React, { useState, useEffect } from 'react'
import './PaymentMethod.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SidebarAccount from '../../Components/SidebarAccount/SidebarAccount'
import CardPaymentMethod from '../../Components/CardPaymentMethod/CardPaymentMethod'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate  } from 'react-router-dom'
import { SEO } from '../../Helpers/SEO'

function PaymentMethod() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

    const sideMenuAccount = [
        {id: "1", menu: "Dashboard", link: "/teslaaccount", class:"", icon: "HomeOutlinedIcon"}, 
        {id: "2", menu: "Profile Settings", link: "/profilesettings", class:"", icon: "PermIdentityOutlinedIcon"},
        {id: "3", menu: "Payment Method", link: "/payment-method", class:"active", icon: "PaymentOutlinedIcon"},
        {id: "4", menu: "Charging", link: "/", class:"", icon: "BoltOutlinedIcon"},
        {id: "5", menu: "Order History", link: "/", class:"", icon: "ShoppingBagOutlinedIcon"}];

    useEffect(() => {
        SEO({
            title: 'Payment Method | Tesla',
            metaDescription: 'Payment Method Page'
        });
    }, []);

    return (
        <div className="paymentMethod">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={false} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="accountContentWrapper">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <SidebarAccount listMenus={sideMenuAccount} />
                        </Col>
                        <Col lg="9">
                            <h1>Payment Method</h1>
                            { user ?
                                <Row>
                                    <Col lg="4">
                                        <CardPaymentMethod image="charging-supercharger.avif" title="Get Started" description="Set up simple and convenient charging" link="#" labelLink="Add Card" />
                                    </Col>
                                </Row>
                                : <Navigate to="/login" />
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer listMenus={menuFooter} />
        </div>
    )
}

export default PaymentMethod;
