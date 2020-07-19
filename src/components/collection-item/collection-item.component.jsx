import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    BuyIcon,
    BuyQuantity} from './collection-item.styles';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CollectionItem = ({item, addItem, cartItems} ) => {
    const {name, price, imageUrl} = item;
    const isInCartItem = cartItems.find(el => el.id === item.id);
    return (
    <CollectionItemContainer>
        <ImageContainer imageUrl={imageUrl}>
            <BuyIcon>
                <i onClick={() => addItem(item)} className={`fas fa-cart-plus ${ isInCartItem ? `selected` : ' '}`}>
                {
                    isInCartItem ?
                    <BuyQuantity>{isInCartItem.quantity}</BuyQuantity> :
                    null
                }
                </i>
              
            </BuyIcon>  
        </ImageContainer>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>   
    </CollectionItemContainer>

)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
});
  
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);