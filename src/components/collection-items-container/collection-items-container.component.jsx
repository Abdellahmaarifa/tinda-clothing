import React from 'react';
import {withRouter} from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import {CollectionItemsContainerWraper} from './collection-items-container.styles';
import CollectionItems from '../collection-items/collection-items.component';

const CollectionItemsContainer = ({collection}) => {
    const {items,title }= collection;
    return (
        <CollectionItemsContainerWraper>
            <CollectionItems items={items} title={title}/>
        </CollectionItemsContainerWraper>

    )   
}
const mapStateToProps = (state, ownProps) => {
    const collectionId = ownProps.match.params.collectionId;
    const param = ownProps.location.pathname.replace('/shop/', '').replace(`/${collectionId}`, '');
    return({
    collection:selectCollection(collectionId, param)(state)
})};
export default withRouter(connect(mapStateToProps)(CollectionItemsContainer));