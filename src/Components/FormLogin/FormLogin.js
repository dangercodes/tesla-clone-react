import React, { useState } from 'react'
import './FormLogin.scss'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form-login">
            <h1>Sign In</h1>
            <Form onSubmit={(e) => signIn(e)}>
                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" name="sign-in" variant="primary">Sign in</Button>
            </Form>
            <div className="form-login__info">
                <Link to="#">Forgot email?</Link>
                <span>|</span>
                <Link to="#">Forgot password?</Link>
            </div>
            <div className="form-login__divider">
                <hr/><span>OR</span><hr/>
            </div>
            <Link to="#">
                <Button variant="secondary">Create Account</Button>
            </Link>
        </div>
    )
}

export default FormLogin
