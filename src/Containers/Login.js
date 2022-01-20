import React, { useEffect } from 'react'
import FormLogin from '../Components/FormLogin/FormLogin'
import HeaderLogin from '../Components/HeaderLogin/HeaderLogin'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import  { Navigate  } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { SEO } from '../Helpers/SEO'

function Login() {
    const user = useSelector(selectUser)
    
    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}, 
        {id: "3", menu: "Contact", link: "/"}];

    useEffect(() => {
        SEO({
            title: 'Tesla SSO - Sign In',
            metaDescription: 'Login Page'
        });
    }, []);

    return (
        <div className="login">
            <HeaderLogin />
            { user ? <Navigate to="/teslaaccount" /> : <FormLogin /> }
            {/* <FormLogin /> */}
            <Footer listMenus={menuFooter} />
        </div>
    )
}

export default Login
