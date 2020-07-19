import styled from 'styled-components';

export const Shop = styled.div`
    display: flex;
    justify-content:${(props) => props.flexDisplay ? 'space-around':'flex-end'};
    position:relative;
    top: 150px;
    @media only screen and (max-width: 75em) { /*tapland 1200px*/
        
        justify-content:center;
}
    @media only screen and (max-width: 56.25em) { /*tabport 900px*/
            
            justify-content:center;

    } 
    @media only screen and (max-width: 37.5em) {  /*phone 600px */
        justify-content:center;
       
    }

`;