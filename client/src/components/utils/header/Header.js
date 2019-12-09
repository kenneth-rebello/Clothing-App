import React from 'react';
import {HeaderContainer, OptionDiv, OptionLink, OptionsContainer, LogoContainer } from './header.styles.js'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo} from '../../../assets/crown.svg';
import CartIcon from '../../cart/CartIcon';
import CartDropdown from '../../cart/CartDropdown';
import {selectCurrentUser} from '../../../redux/selectors/user.selector';
import { selectCartHidden } from '../../../redux/selectors/cart.selector';
import { unsetCurrentUser } from '../../../redux/actions/user.actions.js';

const Header = ({currentUser, unsetCurrentUser, hidden}) => {

    return (
  
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
                <h2>Crown Clothing</h2>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                <OptionLink to="/contact">
                    Contact
                </OptionLink>
                {currentUser ?
                <OptionDiv onClick={()=>unsetCurrentUser()}>Sign Out</OptionDiv>
                :
                <OptionLink to="/signin">Sign In</OptionLink>}
                <CartIcon/>
            </OptionsContainer>
            {!hidden ? <CartDropdown/> : null}
        </HeaderContainer>
    
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden    
})

const mapDispatchToProps = dispatch => ({
    unsetCurrentUser: () => dispatch(unsetCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)