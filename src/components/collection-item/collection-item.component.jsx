import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer } from './collection-item.styles';
const CollectionItem = ({ item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <ImageContainer imageUrl={imageUrl}>  
        </ImageContainer>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>   
        <CustomButton inverted onClick={() => addItem(item)}>
         Add to cart 
        </CustomButton> 
    </CollectionItemContainer>

)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);