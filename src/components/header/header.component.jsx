import React from 'react';
import { ReactComponent as Logo } from '../../assets/tinda-logo.svg';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {HeaderContainer, LogoContainer, OpetionsContainer, LinkOption, MenuIcon} from './header.styles';

const Header = ({ currentUser, hidden}) => {
    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <MenuIcon>
           
            <LinkOption to='/shop'>
                <i className="fas fa-store"></i>
            </LinkOption>
            {
                currentUser ?
                <LinkOption  onClick={() => auth.signOut()}>
                    <i className="fas fa-sign-out-alt"></i>
                </LinkOption>
                :
                <LinkOption to='/signin'>
                    <i className="fas fa-user"></i>
                </LinkOption>
            }
            <CartIcon className='cardIconMobile'/>
        </MenuIcon>
        <OpetionsContainer>
            <LinkOption to='/shop'>
                SHOP
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
)};


const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser ,
    hidden : selectCartHidden
})
export default connect(mapStateToProps)(Header);