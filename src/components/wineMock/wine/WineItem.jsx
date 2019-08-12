import React from 'react'
import './WineItem.css'

const WineItem = ({ image, name, year }) => (
    <div className="test">
        <img className="ui tiny image" src={image} alt="Wine"/>
        <div className="content">
            <div><h5 className="header">{name}</h5></div>
            <div>{'Year: '}<span className="header">{year}</span></div>
        </div>
    </div>
)

export default WineItem
