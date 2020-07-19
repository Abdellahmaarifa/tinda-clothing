import styled from 'styled-components';


export const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        flex-direction:column;
        padding:0 100px;

    } 
    @media only screen and (max-width: 37.5em) {  /*phone/600px */
        flex-direction:column;
        padding:0 20px;

    }
`;

export const DirectoryHeading = styled.h2`
    text-align:center;
    margin:40px;
    font-size:30px;
    padding:20px;
    display:block;
    width:100%;
    color:#40BD7E;
    text-transform:uppercase;
    @media only screen and (max-width: 37.5em) {  /*phone/600px */
        margin:0;
    }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        margin:0;
    } 
`;