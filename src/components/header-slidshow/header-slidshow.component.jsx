import React from 'react';
import {withRouter} from 'react-router-dom';
import { HeaderSlidShowContainer, ImageContainer,BannerContainer,HeaderImagesContainer,ShopNowButton } from './header-slidshow.styles';
import banner_1  from '../../assets/banner_1.png';
import banner_2 from '../../assets/banner_2.png';
import banner_3  from '../../assets/banner_3.png';
import banner_4 from '../../assets/banner_4.png';


const HeaderSlidShow = ({history}) => {
    return (
        <HeaderSlidShowContainer>
            <HeaderImagesContainer> 
                <ImageContainer><BannerContainer alt='img' src={banner_1}/></ImageContainer>
                <ImageContainer><BannerContainer alt='img' src={banner_2}/></ImageContainer>
                <ImageContainer><BannerContainer alt='img' src={banner_3}/></ImageContainer>
                <ImageContainer><BannerContainer alt='img' src={banner_4}/></ImageContainer>
            </HeaderImagesContainer>
            <ShopNowButton onClick={() => history.push('/shop')}>SHOP NOW</ShopNowButton>

        </HeaderSlidShowContainer>
        )
};




export default withRouter(HeaderSlidShow);