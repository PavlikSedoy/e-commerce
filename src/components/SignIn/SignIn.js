import React, {useState} from 'react'

import Forminput from '../forms/Forminput/Forminput'
import Button from '../forms/Button/Button'
import { signInWithGoogle, signInWithFacebook, auth } from './../../firebase/utils'

import './signin.scss'

const SignIn = () => {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()

        const email = event.target.email,
            password = event.target.passwrod

        try {
            await auth.signInWithEmailAndPassword(email, password)

            setEmail('')
            setPassword('')
        } catch(err) {
            console.error(err)
        }
    }

    const handleChange = event => {
        const name = event.target.name,
            value = event.target.value

        switch(name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
        }
    }

    return (
        <div className="signin">
          <div className="signin__wrapper">
              <h2>Login</h2>

              <div className="signin__form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="signin__email-signin">
                            <Forminput
                                type="email"
                                name="email"
                                value={email}
                                placeholder='email'
                                onChange={handleChange}
                            />
                            
                            <Forminput
                                type="password"
                                name="password"
                                value={password}
                                placeholder='Password'
                                onChange={handleChange}
                            />

                            <Button type="sumbit" >
                                Log In
                            </Button>
                        </div>

                        <div className="signin__social-signin">
                            <div className="signin__row">
                                <Button onClick={signInWithGoogle}>
                                    Sign In with Google
                                </Button>
                            </div>
                            <div className="signin__row">
                                <Button onClick={signInWithFacebook}>
                                    Sign In with Facebook
                                </Button>
                            </div>
                        </div>
                    </form>
              </div>
          </div>
        </div>
    )
}

export default SignIn
