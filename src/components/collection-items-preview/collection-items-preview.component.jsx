import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {PreviewContainer, Heading, CollectionItemsPreviewContainer} from './collection-items-preview.styles.jsx';
export const CollectionItemsPreview = ({collection, ItemsCount}) => {

    return (
        <CollectionItemsPreviewContainer>
            <Heading>{collection.title}</Heading>
            <PreviewContainer>
            {
                collection
                .items
                .filter((item, idx) => idx < ItemsCount)
                .map(item => (
                    
                    <CollectionItem key = {item.id} item={item} />
                    
                   
                ))
            }
            </PreviewContainer>
        </CollectionItemsPreviewContainer>
    )

}