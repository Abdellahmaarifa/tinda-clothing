import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    width:950px;
    display:flex;
    justify-content: space-between;
    margin:30px auto;
    margin-top: 18vh;
        
    @media only screen and (max-width: 75em) { /*tapland 1200px*/
        width:90%    
    }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        flex-direction:column;
        align-items:center;
    } 
    @media only screen and (max-width: 37.5em) {  /*phone 600px */
        flex-direction:column;
        align-items:center;
    }
`;

