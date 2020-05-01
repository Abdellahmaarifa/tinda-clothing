import React from 'react';
import {withRouter} from 'react-router-dom';
import { HeaderSlidShowContainer, ImageContainer,BanContainer,HeaderImagesContainer,ShopNowButton } from './header-slidshow.styles';
import ban1 from '../../assets/ban-1.png';
import ban2 from '../../assets/ban-2.png';
import ban3  from '../../assets/ban-3.png';
import ban4  from '../../assets/ban-4.png';

const HeaderSlidShow = ({history}) => {
    return (
        <HeaderSlidShowContainer>
            <HeaderImagesContainer> 
            <ImageContainer><BanContainer alt='img' src={ban3}/></ImageContainer>
            <ImageContainer><BanContainer alt='img' src={ban1}/></ImageContainer>
            <ImageContainer><BanContainer alt='img' src={ban4}/></ImageContainer>
            <ImageContainer><BanContainer alt='img' src={ban2}/></ImageContainer>
        </HeaderImagesContainer>
        <ShopNowButton onClick={() => history.push('/shop')}>SHOP KNOW</ShopNowButton>

        </HeaderSlidShowContainer>
        )
};




export default withRouter(HeaderSlidShow);