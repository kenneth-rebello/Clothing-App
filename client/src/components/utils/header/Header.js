import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss'
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
  
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo><div className="option">Crown Clothing</div>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
                {currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/signin">Sign In</Link>}
                <CartIcon/>
            </div>
            {!hidden ? <CartDropdown/> : null}
        </div>
    
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden    
})

export default connect(mapStateToProps)(Header)