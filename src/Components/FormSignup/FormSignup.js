import React, { useState } from 'react'
import './FormSignup.scss'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'

function FormSignup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signUp = (e) => {
        e.preventDefault();

        if (!fName) {
            return alert("Please enter first name!");
        }

        if (!lName) {
            return alert("Please enter last name!");
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: fName
                })
            })
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: fName,
                    })
                )
                navigate('/teslaaccount')
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="formSignup">
            <h1>Create Account</h1>
            <Form onSubmit={(e) => signUp(e)}>
                <Form.Group className="mb-3 form-group" controlId="formBasicFirstName">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" value={fName} onChange={(e) => setFName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={lName} onChange={(e) => setLName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" name="sign-in" variant="primary">Create Account</Button>
            </Form>
            <div className="formSignup__divider">
                <hr/><span>OR</span><hr/>
            </div>
            <Link to="/login">
                <Button variant="secondary">Sign In</Button>
            </Link>
        </div>
    )
}

export default FormSignup
