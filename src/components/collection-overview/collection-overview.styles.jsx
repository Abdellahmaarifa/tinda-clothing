import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    justify-content:space-around;
`;

export const CollectionOverviewContainer = styled.div`
    width:70%;
    
@media only screen and (max-width: 75em) { /* tapland 1200px */
    width:90%;

}
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        width:90%;
    } 
    @media only screen and (max-width: 37.5em) {  /* phone/600px */
        width:80%;
    }
`;
