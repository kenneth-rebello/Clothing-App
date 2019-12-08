import React from 'react'
import {connect} from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/actions/cart.action';
import { selectCartItemsCount } from '../../redux/selectors/cart.selector';
import { CartIconComponent, ItemCount } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <CartIconComponent className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount className="item-count">{itemCount}</ItemCount>
        </CartIconComponent>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon); 