import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import {
    CheckoutItemContainer,
    ImageContainer,
    NameContainer,
    QuantityContainer,
    PriceContainer,
    ValueContainer,
    ArrowContainer,
    RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
    const { name, imageUrl, quantity, price} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt='item' src={imageUrl}/>
            </ImageContainer>
            <NameContainer>{name}</NameContainer>

            <QuantityContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <ValueContainer> {quantity} </ValueContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer>${price}</PriceContainer>
            <RemoveButtonContainer onClick={() => 
                clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>);
};
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);