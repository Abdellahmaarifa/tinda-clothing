import styled from 'styled-components';


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 90px;
    z-index: 5;
    button {
      margin-top: auto;
    }
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const SpanContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;