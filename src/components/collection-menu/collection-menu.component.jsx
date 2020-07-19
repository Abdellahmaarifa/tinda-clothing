import React from 'react';
import {SectionMenuItemsContainer, SectionMenuItem} from './collection-menu.styles';
import {withRouter} from 'react-router-dom';
const CollectionMenu = ({history, match, collections}) =>{
    return(
        <SectionMenuItemsContainer>{
            Object.keys(collections).map(
                item => (
                    <SectionMenuItem key={collections[item].id} onClick={() => history.push(`${match.url}/${collections[item].routeName}`)}>
                        <span>{collections[item].title}</span>
                    </SectionMenuItem>))
        }</SectionMenuItemsContainer>
    )
}



export default withRouter(CollectionMenu);