import styled,{keyframes} from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

import imgSlid_1 from '../../assets/imgSlid_1.jpg';
import imgSlid_2 from '../../assets/imgSlid_2.jpg';
import imgSlid_3 from '../../assets/imgSlid_3.jpg';
import imgSlid_4 from '../../assets/imgSlid_4.jpg';



const slideAnimation = keyframes`
    0%{left:100%;width:100%;}
    5%{left:0;}
    25%{left:0;}
    30%{left:-100%;width:100%}
    100%{left:-100%;width:0;}
`;
const shakeAnimation = keyframes`
from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  2%,
  5% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  10% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  20%{
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;

const buttonAnimation = keyframes`
0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  1% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  3% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  6% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  10% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
const jelloAnimation = keyframes`

from,
1.1%,
to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

10.2% {
  -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
  transform: skewX(-12.5deg) skewY(-12.5deg);
}

23.3% {
  -webkit-transform: skewX(6.25deg) skewY(6.25deg);
  transform: skewX(6.25deg) skewY(6.25deg);
}

34.4% {
  -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
  transform: skewX(-3.125deg) skewY(-3.125deg);
}

45.5% {
  -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
  transform: skewX(1.5625deg) skewY(1.5625deg);
}

56.6% {
  -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
  transform: skewX(-0.78125deg) skewY(-0.78125deg);
}

67.7% {
  -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
  transform: skewX(0.390625deg) skewY(0.390625deg);
}

40.8% {
  -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
 
`;
export const HeaderSlidShowContainer = styled.div`
  width:100%;
  position:relative;

`;
export const HeaderImagesContainer = styled.div`
    padding:0;
    position:relative;
    width:100%;
    height:400px;
    display:block;
    margin-bottom:10px;
    overflow:hidden;
    
    &>*{
        animation:${slideAnimation} 20s infinite;
        background-size:cover;
        background-position:center;
        width:100%;
        height:100%;
        @media only screen and (max-width: 37.5em) {  /* phone 600px */
          background-position:left;
        }
    }

    :nth-child(1) :nth-child(1){
        animation-delay:-1s !important;
        background-image:url(${imgSlid_1});
        > img {
            animation:${jelloAnimation} 5s  infinite;
        }
    }
    :nth-child(1) :nth-child(2){
        animation-delay:4s !important;
        background-image:url(${imgSlid_2});
        left:100%;
        > img {
            animation:${shakeAnimation} 5s infinite;
        }

    }
    :nth-child(1) :nth-child(3){
        animation-delay:9s !important;
        background-image:url(${imgSlid_3});
        left:100%;
        > img {
            animation:${jelloAnimation} 5s infinite;
        }

    }
    :nth-child(1) :nth-child(4){
        animation-delay:14s !important;
        background-image:url(${imgSlid_4});
        left:100%;
        > img {
            animation:${shakeAnimation} 5s infinite;
        }

    }
`;


export const ImageContainer = styled.div`
    width:100%;
    position:absolute;
    display:block;
`;


export const BannerContainer = styled.img`
    background-image:none !important;
    position:absolute;
    top:20px;
    left:12%;
    width:auto;
    height:70%;
    @media only screen and (max-width: 37.5em) {  /* phone 600px */
     height:60%;
     left:23%;
    }
    @media only screen and (max-width: 25em) { /* smallphone 900px */
      height:40%;
      left:60px;
      top:100px;
    }
`;

export const ShopNowButton = styled(CustomButton)`
    animation:${buttonAnimation} 5s infinite;
    position: absolute;
    bottom: 10%;
    left: 17%;
    transition:transform 0s;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
    &:hover{

    }
    @media only screen and (max-width: 37.5em) {  /* phone 600px */
    left:35%;
    }
  
`;