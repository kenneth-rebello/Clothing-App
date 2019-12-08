import React from 'react';

import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cart.action';
import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addToCart}) => {

    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}} />
            <CollectionFooterContainer >
                <NameContainer>{name}</NameContainer>
                <PriceContainer >{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={()=>addToCart(item)}>Add To Cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart : item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem); 