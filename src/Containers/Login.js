import React from 'react'
import FormLogin from '../Components/FormLogin/FormLogin'
import HeaderLogin from '../Components/HeaderLogin/HeaderLogin'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import  { Navigate  } from 'react-router-dom';

function Login() {
    const user = useSelector(selectUser)

    return (
        <div className="login">
            <HeaderLogin />
            { user ? <Navigate to="/teslaaccount" /> : <FormLogin /> }
            {/* <FormLogin /> */}
        </div>
    )
}

export default Login
