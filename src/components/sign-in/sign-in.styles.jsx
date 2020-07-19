import styled from 'styled-components';

export const SigninContainer = styled.div`
    width: 460px;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 75em) { /*tapland 1200px*/
        width:50%   
     }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        margin-bottom:100px;
        width:60%
    } 
    @media only screen and (max-width: 37.5em) {  /*phone 600px */
        margin-bottom:100px;
        width:80%
    }
`;
export const TitleContainer = styled.h2`
    margin: 10px 0;
    text-transform:uppercase;
`;
export const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    @media only screen and (max-width: 37.5em) {  /*phone 600px */
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        button {
            width:90%;
            margin:10px;
        }
    }
`;