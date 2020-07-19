import React from 'react';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import {SectionMenuContainer} from './collections-page.styles';

const CollectionsPage = ({collections}) => {
    return (<SectionMenuContainer collections={collections}/>)
};

const mapStateToProps = (state, ownProps) => ({
    collections:selectCollections(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionsPage);