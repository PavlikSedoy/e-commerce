import React, { useState } from 'react'

import { auth, handleUserProfile } from '../../firebase/utils'

import Container from '../Container/Container'
import Forminput from '../forms/Forminput/Forminput'
import Button from '../forms/Button/Button'

import './signup.scss'

const Signup = () => {
    const [displayName, setDispayName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPasswrod] = useState(''),
        [confirmPassword, setConfirmPasswrod] = useState(''),
        [errors, setErrors] = useState([])

    const handleChange = event => {
        const value = event.target.value,
            name = event.target.name

        switch ( name ) {
            case 'displayName':
                setDispayName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPasswrod(value)
                break
            case 'confirmPassword':
                setConfirmPasswrod(value)
                break
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault()
        setErrors([])

        if ( password !== confirmPassword ) {
            const err = ['Passwords is not match']
            setErrors(err)
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await handleUserProfile(user, { displayName })

            setDispayName('')
            setEmail('')
            setPasswrod('')
            setConfirmPasswrod('')
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="signup">
            <Container>
                <div className="signup__wrapper">
                    <h2>Signup</h2>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => (
                                <li key={index}>
                                    {err}
                                </li>
                            ))}
                        </ul>
                    )}

                    <form className="signup__form" onSubmit={handleFormSubmit}>
                        <Forminput
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Full name"
                            onChange={handleChange}
                        />
                        
                        <Forminput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Your Email"
                            onChange={handleChange}
                        />

                        <Forminput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={handleChange}
                        />

                        <Forminput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm password"
                            onChange={handleChange}
                        />

                        <Button type="submit">
                            Register
                        </Button>

                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Signup