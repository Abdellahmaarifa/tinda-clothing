import styled from 'styled-components';
import CollectionMenu from '../collection-menu/collection-menu.component';


export const SectionMenuContainer = styled(CollectionMenu)`
        width:25%;
      height:100vh;
`;


export const CollectionItemsContainerWraper = styled.div`
    display: flex;
    justify-content:space-around;


    @media only screen and (max-width: 75em) { /* tapland 1200px */
        width:100%;
    }
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        width:100%;
    } 
    @media only screen and (max-width: 37.5em) {  /* phone 600px */
        width:100%;
    }
`;
