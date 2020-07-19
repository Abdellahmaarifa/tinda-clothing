import styled from 'styled-components';
export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease 0.3s;
    i {
        font-size:30px;
        color:#28B485 ;
    }
    &:hover{
        background-color:#2c3e50;
        i {
            color:white;
        }
        > span {
            color:#2c3e50;
        }
    }
   
`;




export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    bottom: 8px;
    color:white;
`;