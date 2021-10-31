import React from "react"

import PC from '../../assets/pc.jpg'
import Parts from '../../assets/parts.png'

import './directory.scss'

const Directory = () => {
    return (
        <div className="directory">
            <a className="directory__type directory__type--pc" href="#">
                <img className="directory__img" src={PC} alt="Shop PC" />
                <div className="directory__bg"></div>     
                <button className="directory__btn">Shop PC</button>
            </a>
            <a className="directory__type directory__type--parts" href="#">
                <img className="directory__img" src={Parts} alt="Shop Parts" />
                <div className="directory__bg"></div>
                <button className="directory__btn">Shop Parts</button>
            </a>
        </div>
    )
}

export default Directory