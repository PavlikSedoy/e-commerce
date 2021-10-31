import React from 'react'

import Logo from '../../assets/logo.png'

import './header.scss'

const Header = props => {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img className="logo-img" src={Logo} alt="Bue your PC" />
                </div>
            </div>
        </div>
    )
}

export default Header