import React from 'react'


const WineDetail = ({
    name, year, image, description
}) => (
    <div className="ui segment" style={{ minHeight: 500 }}>
        <div className="ui left floated image large">
            <img src={image} alt="Wine bottle"/>
        </div>
        <div><b>{name}</b>{' - '}<b>{year}</b></div>
        <p>{description}</p>
    </div>
)

export default WineDetail