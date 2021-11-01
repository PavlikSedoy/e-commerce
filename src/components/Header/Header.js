import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import Container from '../Container/Container'
import { auth } from '../../firebase/utils'

import './header.scss'

const Header = props => {
    const { currentUser } = props

    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img className="header__logo-img" src={Logo} alt="Bue your PC" />
                    </Link>
                    {/* End logo */}

                    <div className="header__user-control">
                        {currentUser ? (
                            <>
                                <span
                                    className="header__reg-link"
                                    onClick={() => auth.signOut()}
                                >Log Out</span>
                            </>
                        ) : (
                            <>
                                <Link to="/registration" className="header__reg-link">Register</Link>
                                <Link to="/login" className="header__reg-link">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null,
}

export default Header