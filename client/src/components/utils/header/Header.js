import React from 'react';
import {HeaderContainer, OptionDiv, OptionLink, OptionsContainer, LogoContainer } from './header.styles.js'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo} from '../../../assets/crown.svg';
import CartIcon from '../../cart/CartIcon';
import CartDropdown from '../../cart/CartDropdown';
import { auth } from '../../../firebase/firebase.utils';
import {selectCurrentUser} from '../../../redux/selectors/user.selector';
import { selectCartHidden } from '../../../redux/selectors/cart.selector';

const Header = ({currentUser, hidden}) => {
    return (
  
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo><OptionDiv>
                    Crown Clothing
                </OptionDiv>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                <OptionLink to="/contact">
                    Contact
                </OptionLink>
                {currentUser ?
                <OptionDiv onClick={()=>auth.signOut()}>Sign Out</OptionDiv>
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

export default connect(mapStateToProps)(Header)