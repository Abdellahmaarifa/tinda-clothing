import styled from 'styled-components';

export const TitleContainer = styled.div`
      font-size: 38px;
      margin: 0 auto 30px 0;
      text-align:center;
`;


export const CollectionItemsSection = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      @media only screen and (max-width: 75em) { /*tapland 1200px*/
        font-size: 50%  !important; /*1 rem = 8px, 8/16 = 50%*/
    }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;
    } 
    @media only screen and (max-width: 37.5em) {  /*phone/600px */
      grid-template-columns: 1fr
    }
`;

export const CollectionItemsContainer = styled.div`
   @media only screen and (max-width: 37.5em) {  /*phone/600px */
  width:70%;   
 }
`;