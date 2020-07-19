import styled from 'styled-components';


export const SectionMenuItemsContainer = styled.div`
width:100%;
padding:45px;
position: fixed;
left: 0;
right: 0;
top: 10vh;
width: 30%;
z-index: 1;

@media only screen and (max-width: 75em) { /* tapland 1200px */
      display: flex;
      width: 100%;
      top: 5vh;
}
    @media only screen and (max-width: 56.25em) { /* tabport 900px */
      display: flex;
      width: 100%;
      top: 5vh;
    } 
    @media only screen and (max-width: 37.5em) {  /* phone/600px */
      display: flex;
      width: 100%;
      top: 5vh;
    }
`;
export const SectionMenuItem = styled.div`
font-size:18px;
font-weight:400;
display:block;
width:100%;
height:60px;
background-color:white;
margin-bottom:10px;
padding:20px;
text-align:center;
box-shadow: 0 0 3px 0.1px rgba(35,35,35,0.06);
transition: all .3s;
position: relative;
>span {
      position:relative;
      z-index:10000;
}
::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #28B485;
  transform: scaleY(0);
  transition: transform .2s,
              width .4s cubic-bezier(1,0,0,1) .2s,
              background-color .1s;
}

&:hover{
      > span {
            color:white;
            transition: color  cubic-bezier(1,0,0,1) .6s;
      }
      ::before{
      transform: scaleY(1);
      width: 100%;
}   
}

`;
