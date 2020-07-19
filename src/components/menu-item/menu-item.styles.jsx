import styled from 'styled-components';


export const MenuItemContainer = styled.div`
    min-width: 20%;
    height: ${props => props.size  ? 380 : 400}px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 10px solid white;
    margin: 0 40px 15px 40px;
    overflow: hidden;
    box-shadow:0 0 10px .5px rgba(35, 35, 35, 0.08);
    position: relative;
    @media only screen and (max-width: 37.5em) {  /*phone 600px */
      margin: 20px 0;
    }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
      margin: 20px 0;
    } 
    & .background-image::after {
      content:"";
      position:absolute;
      width:100%;
      height:100%;
      bottom:0;
      transition:all .3s;
    }
    &:first-child {
      margin-right: 40px;
      @media only screen and (max-width: 56.25em) { /*tabport 900px*/
      margin: 0;
    } 
    }
  
    &:last-child {
      margin-left: 7.5px;
      @media only screen and (max-width: 56.25em) { /*tabport 900px*/
      margin: 0;
    } 
    }
    &:hover {
      cursor: pointer;
     
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        ::after{
        background-color:rgba(0, 0, 0, 0.4);

      }
    
      }
    
      & .content {
        opacity: 0.9;
      }
    }
`;

export const BackgroundImageContainer = styled.div`
    background-image:url(${props => props.imageUrl});
    height: 100%;
    width:100%;
    background-position: center;
    background-size:cover;
`;
export const ContentContainer = styled.div`
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity:.7;
      position: absolute;
      
`;

export const TitelContainer = styled.h1`
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
`;
export const SubTitleContainer = styled.span`
        font-weight: 400;
        font-size: 16px;
`;
