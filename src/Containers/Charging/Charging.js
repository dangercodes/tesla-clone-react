import React, { useState, useEffect } from 'react'
import './Charging.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SidebarAccount from '../../Components/AccountComponents/SidebarAccount/SidebarAccount'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate, Link } from 'react-router-dom'
import { SEO } from '../../Helpers/SEO'
import InfoIcon from '@mui/icons-material/Info';

function Charging() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

    useEffect(() => {
        SEO({
            title: 'Charging | Tesla',
            metaDescription: 'Charging Page'
        });
    }, []);

    return (
        <div className="charging">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} fixed={false} />
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="accountContentWrapper">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <SidebarAccount />
                        </Col>
                        <Col lg="9">
                            <div className="charging__head">
                                <h1>Charging</h1>
                                <Link to="/">Manage Payment</Link>
                            </div>
                            { user ?
                                <div className="charging__box-info">
                                    <div className="box-icon">
                                        <InfoIcon />
                                    </div>
                                    <span>Charging sessions will appear here once they are available.</span>
                                </div>
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

export default Charging
