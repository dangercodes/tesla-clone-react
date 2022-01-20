import React, { useEffect } from 'react'
import FormSignup from '../Components/FormSignup/FormSignup'
import HeaderLogin from '../Components/HeaderLogin/HeaderLogin'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import  { Navigate  } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { SEO } from '../Helpers/SEO'

function Signup() {
    const user = useSelector(selectUser)

    const menuFooter = [
        {id: "1", menu: "Tesla © 2022", link: "/"}, 
        {id: "2", menu: "Privacy & Legal", link: "/"}, 
        {id: "3", menu: "Contact", link: "/"}];
    
    useEffect(() => {
        SEO({
            title: 'Tesla SSO - Register',
            metaDescription: 'Register Page'
        });
    }, []);

    return (
        <div className="signup">
            <HeaderLogin />
            { user ? <Navigate to="/teslaaccount" /> : <FormSignup /> }
            {/* <FormSignup /> */}
            <Footer listMenus={menuFooter} />
        </div>
    )
}

export default Signup
