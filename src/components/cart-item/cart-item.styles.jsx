import styled from 'styled-components';


export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
    border-radius:10px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.4);
    transition: all .2s;

    img {
      width: 30%;
      border-radius:10px 0 0 10px;
      
    }
    &:hover{
        background-color:#F2F5F7;
    }
`;

export const ItemDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;
export const NameContainer = styled.span`
    font-size: 16px;
`;
