import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
import {MenuItemContainer,BackgroundImageContainer, ContentContainer, TitelContainer, SubTitleContainer} from './menu-item.styles';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer imageUrl={imageUrl} className='background-image'></BackgroundImageContainer>
        <ContentContainer>
            <TitelContainer >{title.toUpperCase()}</TitelContainer>
            <SubTitleContainer >SHOP NOW</SubTitleContainer>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);