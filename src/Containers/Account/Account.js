import React, { useState } from 'react'
import './Account.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Dashboard from '../Dashboard/Dashboard'
import SidebarAccount from '../../Components/SidebarAccount/SidebarAccount'
import {Container, Row, Col} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate  } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function Account() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

    return (
        <div className="account">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={false} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="account__contentWrapper">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <SidebarAccount />
                        </Col>
                        <Col lg="9">
                            {/* <Dashboard /> */}
                            { user ? <Dashboard /> : <Navigate to="/login" /> }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer listMenus={menuFooter} />
        </div>
    )
}

export default Account
