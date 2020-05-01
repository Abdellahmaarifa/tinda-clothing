import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 10px 30px;
    background-color:#fff;
    box-shadow: .2px 0.05px rgba(0,0,0,0.8);
`;

export const LogoContainer = styled(Link)`
    width: 80px;
  
`;

export const OpetionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LinkOption = styled(Link)`
    padding: 10px 15px;
    cursor:pointer;
`;
