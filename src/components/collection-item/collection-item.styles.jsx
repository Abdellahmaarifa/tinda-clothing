import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom:30px;
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
    background-image:url(${getimageUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;
export const CollectionFooterContainer = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
`;
export const NameContainer = styled.span`
        width: 90%;
        margin-bottom: 15px;
`;
export const PriceContainer = styled.span`
    width: 10%;
`;