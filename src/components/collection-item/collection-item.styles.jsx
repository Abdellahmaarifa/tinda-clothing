import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 30vw;
    align-items: center;
    position: relative;
    margin: 0 10px 30px 10px;
    @media only screen and (max-width: 75em) { /*tapland 1200px*/
        height: 30vw;
    }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        width: 35vw;
        margin: 40px 0;
        height: 45vw;

    } 
    @media only screen and (max-width: 37.5em) {  /*phone/600px */
        width: 80%;
        margin: 20px 0;
        height: 50vh;
        margin:40px auto;
    }
    button {
        width:80%;
        opacity:.7;
        position: absolute;
        top:255px;
        display: none;
    }
    .image{
        opacity:.8;
      }

      button {
        opacity: .85;
        display:flex;
      }

    
`;
const getimageUrl = props => props.imageUrl;
export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    position:relative;
    background-image:linear-gradient(-45deg,#7ed56f, #28B485 22%, transparent 17%), url(${getimageUrl});
    margin-bottom: 5px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 5px;
    background-color:white;
    border-radius:10px;
`;
export const CollectionFooterContainer = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      padding:0 15px;
      margin:0;
`;
export const NameContainer = styled.span`

`;
export const PriceContainer = styled.span`

`;

export const BuyIcon = styled.div`
    width: 50%;
    height: 20%;
    position: absolute;
    bottom: 5px;
    right: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;

     i{
    color: #777;
    background-color: white;
    border-radius: 50%;
    font-size: 25px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    transition:all .1s;

    &:hover {
        color:#28B485;
        font-size:30px;
    }
     }

    .selected{
        color:#eee;
        background-color: #2c3e50;
        &:hover {
        color:#28B485;
        background-color: white;

    }
    }



 
`;

export const BuyQuantity = styled.span`
    position: absolute;
    right: -8px;
    top: -7px;
    background-color: white;
    width: 22px;
    height: 22px;
    text-align: center;
    border-radius: 50%;
    font-size:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#2c3e50;
`;
