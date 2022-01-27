import React, { useState, useEffect } from 'react'
import './Account.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import CardDashboard from '../../Components/AccountComponents/CardDashboard/CardDashboard'
import SidebarAccount from '../../Components/AccountComponents/SidebarAccount/SidebarAccount'
import {Container, Row, Col} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate  } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { SEO } from '../../Helpers/SEO';

function Account() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)
    const newDisplayName = user.displayName.split(" ");

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

    useEffect(() => {
        SEO({
            title: 'Tesla Account | Tesla',
            metaDescription: 'Tesla Account Page'
        });
    }, []);

    return (
        <div className="account">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={false} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="accountContentWrapper">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <SidebarAccount />
                        </Col>
                        <Col lg="9">
                            <h1>Dashboard ({newDisplayName[0] + "'s"} Tesla)</h1>
                            { user ? <CardDashboard /> : <Navigate to="/login" /> }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer listMenus={menuFooter} />
        </div>
    )
}

export default Account
