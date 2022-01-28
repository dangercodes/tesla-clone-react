import React, { useState, useEffect } from 'react'
import './OrderHistory.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SidebarAccount from '../../Components/AccountComponents/SidebarAccount/SidebarAccount'
import CardOrderHistory from '../../Components/AccountComponents/CardOrderHistory/CardOrderHistory'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate } from 'react-router-dom'
import { SEO } from '../../Helpers/SEO'

function OrderHistory() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

    useEffect(() => {
        SEO({
            title: 'Order History | Tesla',
            metaDescription: 'Order History'
        });
    }, []);

    return (
        <div className="orderHistory">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={false} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="accountContentWrapper">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <SidebarAccount />
                        </Col>
                        <Col lg="9">
                            <h1>Order History</h1>
                            { user ?
                                <CardOrderHistory />
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

export default OrderHistory
