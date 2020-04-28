import React from 'react';
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {HeaderContainer, LogoContainer, OpetionsContainer, LinkOption} from './header.styles';
const Header = ({ currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OpetionsContainer>
            <LinkOption to='/shop'>
                SHOP
            </LinkOption>
            <LinkOption to='/shop'>
                 CONTACT
            </LinkOption>
            {
                currentUser ?
                <LinkOption as='div' onClick={() => auth.signOut()}>SIGN OUT</LinkOption>
                :
                <LinkOption to='/signin'>SIGN IN</LinkOption>
            }
            <CartIcon/>
        </OpetionsContainer>
        {
            hidden ? null : <CartDropdown/>

        }
    </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser ,
    hidden : selectCartHidden
})
export default connect(mapStateToProps)(Header);