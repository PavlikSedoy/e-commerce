import React from 'react'

import Button from '../forms/Button/Button'
import { signInWithGoogle } from './../../firebase/utils'

import './signin.scss'

const SignIn = () => {
    const handleSubmit = async e => {
        e.preventDefault()
    }

    return (
        <div className="signin">
          <div className="signin__wrapper">
              <h2>Login</h2>

              <div className="signin__form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="signin__social-signin">
                            <div className="signin__row">
                                <Button onClick={signInWithGoogle}>
                                    Sign In with Google
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
