
import React from 'react';
import {withRouter} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import {TitleContainer, CollectionItemsSection, CollectionItemsContainer} from './collection-items.styles';

const CollectionItems = ({title, items}) => {

    return(
        <CollectionItemsContainer>
            <TitleContainer>{title}</TitleContainer>
            <CollectionItemsSection>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
            </CollectionItemsSection>
        </CollectionItemsContainer>
    )
}

export default withRouter(CollectionItems);
