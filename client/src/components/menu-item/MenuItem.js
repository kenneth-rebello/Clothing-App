import React from 'react'
import {withRouter} from 'react-router-dom';
import { MenuItemDiv, ImageContainer, ContentDiv, Title, Subtitle } from './menu-item.styles';


const  MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <MenuItemDiv className={`${size} menu-item`} onClick={()=>history.push(`${linkUrl}`)}>
            <ImageContainer className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <ContentDiv className="content">
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>Shop Now</Subtitle>
            </ContentDiv>
        </MenuItemDiv>
    )
}

export default withRouter(MenuItem)