import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const MainLayout = props => {
    return (
        <div className="app">
            <Header />
            <div className="app__wrapper">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
