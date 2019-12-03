import React from 'react'
import {withRouter} from 'react-router-dom';

import './menu-item.scss'

function MenuItem({title, imageUrl, size, linkUrl, history, match}) {
    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${linkUrl}`)}>
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

export default withRouter(MenuItem)