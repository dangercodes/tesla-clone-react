import React, { useState, useEffect } from 'react'
import './ProfileSetting.scss'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SidebarAccount from '../../Components/SidebarAccount/SidebarAccount'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import  { Navigate  } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { SEO } from '../../Helpers/SEO'
import FormProfile from '../../Components/FormProfile/FormProfile'

function ProfileSetting() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}];

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
                            <SidebarAccount />
                        </Col>
                        <Col lg="9">
                            <h1>Profile Settings</h1>
                            { user ?
                                <Row>
                                    <Col lg="4">
                                        <FormProfile labelForm="Full Name" valueForm={user.displayName} labelLink="Edit" link="#" buttonAdd={false} />
                                    </Col>
                                    <Col lg="4">
                                        <FormProfile labelForm="Address" valueForm="" labelLink="" link="" buttonAdd={true} />
                                    </Col>
                                    <Col lg="4">
                                        <FormProfile labelForm="Phone Number" valueForm="" labelLink="" link="" buttonAdd={true} />
                                    </Col>
                                    <Col lg="4">
                                        <FormProfile labelForm="Email" valueForm={user.email} labelLink="Edit" link="#" buttonAdd={false} />
                                    </Col>
                                    <Col lg="4">
                                        <FormProfile labelForm="Password" valueForm="*********" labelLink="Reset" link="#" buttonAdd={false} />
                                    </Col>
                                    <Col lg="4">
                                        <FormProfile labelForm="Multi-factor Authentication" valueForm="Add an additional layer of security to your account" labelLink="Manage" link="#" buttonAdd={false} />
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

export default ProfileSetting
