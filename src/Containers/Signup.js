import React from 'react'
import FormSignup from '../Components/FormSignup/FormSignup'
import HeaderLogin from '../Components/HeaderLogin/HeaderLogin'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import  { Navigate  } from 'react-router-dom';

function Signup() {
    const user = useSelector(selectUser)
    return (
        <div className="signup">
            <HeaderLogin />
            { user ? <Navigate to="/teslaaccount" /> : <FormSignup /> }
            {/* <FormSignup /> */}
        </div>
    )
}

export default Signup
