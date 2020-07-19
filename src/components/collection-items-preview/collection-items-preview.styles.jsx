import styled from 'styled-components';


export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:20px;
    @media only screen and (max-width: 75em) { /* tapland 1200px* /
        
    }
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        padding:0;
        flex-wrap:wrap;
        justify-content: space-evenly;

    } 
    @media only screen and (max-width: 37.5em) {  /* phone/600px */
        padding:0;
        flex-direction:column;
        justify-content: center;

    }
`;

export const Heading = styled.h3`
    font-size:24px;
    margin: auto;
    background-color:white;
    width:90%;
    padding:20px;
    border-radius:10px;
    box-shadow:1px 2px 2px #00000030;
    text-align:center;

`;

export const CollectionItemsPreviewContainer = styled.div`
    width:100%;
`;