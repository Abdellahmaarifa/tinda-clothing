import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    margin-top: 18vh;
    button{
      margin-left: auto;
      margin-top: 50px;
    }
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
      width: 85%;
    } 
 
    `;
    
export const CheckoutHeaderContainer = styled.div`
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;`;
export const HeaderBlockContainer = styled.div`
        text-transform: capitalize;
        width: 23%;
  
        &:last-child {
          width: 8%;
        }
        
        @media only screen and (max-width: 56.25em) { /*tabport 900px*/
        font-size: 16px;
      }         
      @media only screen and (max-width: 37.5em) {  /*phone 600px */
            font-size: 11.5px;
    }
`;
export const TotalContainer = styled.div`
     margin-top: 30px;
      margin-left: auto;
      font-size: 36px;`;
export const TestWarningContainer = styled.div`
      text-align:center;
      font-size:24px;
      margin-top:40px;
      color:red;
`;