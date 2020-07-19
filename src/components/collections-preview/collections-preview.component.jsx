import React from 'react';
import {CollectionsPreviewContainer,
        TitleContainer} from './collections-preview.styles';
import {CollectionItemsPreview} from '../collection-items-preview/collection-items-preview.component';

const CollectionsPreview = ({collections, title}) => {
    return (
        <CollectionsPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <div>
            {
                Object.keys(collections).map(collection => (
                    <CollectionItemsPreview key = {collections[collection].id} ItemsCount = {4} collection = {collections[collection]} />
                  
                ))
              
            }
        </div>

    </CollectionsPreviewContainer>
    )
}
export default CollectionsPreview;