import React from 'react';
import CategoriesOverview from '../../components/categories-overview/categories-overview.component';
import { Route } from 'react-router-dom';
import CollectionsPage from '../collections-page/collections-page.component';
import collectionItemsContainer from '../../components/collection-items-container/collection-items-container.component';
import {Shop} from './shop.styles';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({match}) =>{
    console.log('match', match)
    return (
<Shop flexDisplay={match.isExact}>
    <Route exact path={`${match.path}`} component={CategoriesOverview}/>
    <Route path={`${match.path}/:collectionId/`} component={CollectionsPage}/>
    <Route exact path={`${match.path}/:collectionId/`} component={CollectionOverview}/>
    <Route exact path={`${match.path}/:collectionId/:collectionId/`} component={collectionItemsContainer}/>
</Shop>)}


export default ShopPage;