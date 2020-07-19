import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 10px 30px;
    position:fixed;
    top:0;
    z-index:1000;
    background-color:#fff;
    box-shadow: 1px 2px 4px rgba(0,0,0,.2);
    background-image:linear-gradient(120deg, transparent 0%,transparent 65%,#7ed56f 65%,#28B485 100%);
    @media only screen and (max-width: 75em) { /* tapland 1200px */
        background-image:linear-gradient(120deg, transparent 0%,transparent 50%,#7ed56f 50%,#28B485 100%);
    }
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        background-image:none;
        background-color:white;
    } 
    
`;

export const LogoContainer = styled(Link)`
    width: 80px;
  
`;

export const OpetionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        display:none
    } 
    
`;

export const LinkOption = styled(Link)`
    padding: 10px 15px;
    color:white;
    cursor:pointer;
    ::after{
        contain:'';
        position:absolute;
        background-color:red;
        top:0%;
        left:0;
    }
`;


export const MenuIcon = styled.div`
    display:flex;
    display:none;
    font-size:25px;
     a {
         color: #28B485;
     }
    button {
        margin:0;
        padding:0;
    }
    div {
            background-color:#2c3e50 !important;
        i {
            color:white;
        }
        span{
            color:#2c3e50;
        }
    }

    @media only screen and (max-width: 56.25em) { /* tabport 900px */
        display:flex;
    } 
`;