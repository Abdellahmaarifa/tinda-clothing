import styled from 'styled-components';


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 280px;
    height: 375px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius:10px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    background-color: white;
    top: 90px;
    right: 27px;
    z-index: 5;
    button {
      margin-top: auto;
    }
`;

export const CartItemsContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    padding:0px 10px;  
`;

export const SpanContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
    
`;


