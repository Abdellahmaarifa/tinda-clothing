import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from '../collections-preview/collections-preview.component';
import { selectCategories } from '../../redux/shop/shop.selectors';
import { CategoriesContainer } from './categories-overview.styles';
const categoriesOverview = ({categories}) => {
    return(
    <CategoriesContainer>
    {
        Object.keys(categories).map(collection => 
            <CollectionPreview key = {categories[collection].id} {...categories[collection]} />
        )
    }
    </CategoriesContainer>
)};
const mapStateToProps = createStructuredSelector({
    categories: selectCategories
});

export default connect(mapStateToProps)(categoriesOverview);