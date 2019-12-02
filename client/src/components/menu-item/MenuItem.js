import React from 'react'
import PropTypes from 'prop-types'

import './menu-item.scss'

function MenuItem({title, imageUrl, size}) {
    return (
        <div className={`${size} menu-item`} >
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

MenuItem.propTypes = {

}

export default MenuItem