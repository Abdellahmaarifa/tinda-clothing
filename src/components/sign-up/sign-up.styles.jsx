import styled from 'styled-components';

export const SignupContainer = styled.div`
    display: flex;
    flex-direction:column;
    width:380px;
        
   
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        width:60%
    } 
    @media only screen and (max-width: 37.5em) {  /*phone 600px */
        width:80%
    }
    form button{
        
        @media only screen and (max-width: 56.25em) { /*tabport 900px*/
            width:90%;
        margin:auto;
    } 
    }
`;


export const TitleContainer = styled.h2`
    margin: 10px 0;
    text-transform:uppercase;

`;