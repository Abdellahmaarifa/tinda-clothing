import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionOverviewContainer } from './collection-overview.styles';
const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key = {id} {...otherCollectionProps} />
        ))

    }
    </CollectionOverviewContainer>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);