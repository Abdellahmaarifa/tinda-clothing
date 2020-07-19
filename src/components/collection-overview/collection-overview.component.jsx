import React from 'react';
import {CollectionPageContainer, CollectionOverviewContainer} from './collection-overview.styles';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import {CollectionItemsPreview} from '../collection-items-preview/collection-items-preview.component';
import {withRouter} from 'react-router-dom';


const CollectionOverview = ({collections}) => {
    return (
    <CollectionOverviewContainer>
        {
            Object.keys(collections).map(collection =>(

                <CollectionPageContainer>
                     <CollectionItemsPreview ItemsCount = {3} collection={collections[collection]}></CollectionItemsPreview>
                </CollectionPageContainer>
            ))
        }
         
    </CollectionOverviewContainer>
)}


const mapStateToProps = (state, ownProps) => {
    const param = ownProps.location.pathname.replace('/shop/', '');
    return ({
    collections:selectCollections(param)(state)
})};

export default withRouter(connect(mapStateToProps)(CollectionOverview))