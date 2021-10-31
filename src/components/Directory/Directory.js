import React from "react"
import { Link } from "react-router-dom"

import PC from '../../assets/pc.jpg'
import Parts from '../../assets/parts.png'

import './directory.scss'

const Directory = () => {
    return (
        <div className="directory">
            <Link className="directory__type directory__type--pc" to="/">
                <img className="directory__img" src={PC} alt="Shop PC" />
                <div className="directory__bg"></div>     
                <button className="directory__btn">Shop PC</button>
            </Link>
            <Link className="directory__type directory__type--parts" to="/">
                <img className="directory__img" src={Parts} alt="Shop Parts" />
                <div className="directory__bg"></div>
                <button className="directory__btn">Shop Parts</button>
            </Link>
        </div>
    )
}

export default Directory