import styled from 'styled-components';

export const CollectionsPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        text-align:center;

    } 
   
`;
export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
