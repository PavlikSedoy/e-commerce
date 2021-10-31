import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import Container from '../Container/Container'

import './header.scss'

const Header = props => {
    return (
        <div className="header">
            <Container>
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img className="header__logo-img" src={Logo} alt="Bue your PC" />
                    </Link>
                    {/* End logo */}

                    <Link to="/registration" className="header__reg-link">Registration</Link>
                </div>
            </Container>
        </div>
    )
}

export default Header