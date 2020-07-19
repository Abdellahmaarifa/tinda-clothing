import styled, {css} from 'styled-components';


const customButtonStyles = css`
   
    background-color: #55c57a;
    &:hover {
        background-color: #28b485;
        color: white;
    }

`;

const googleSigninStyles = css`

background-color: #3498db;

&:hover {
    background-color: #2980b9;
    color: white;

}

`;

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
        border:none;
    }
`;
const getButtonStyles = props => {
    if (props.isGoogleSignIn){
        return googleSigninStyles
    };

    return props.inverted ? invertedStyles : customButtonStyles;
}
export const CustomButtonContainer = styled.button`
    font-family: "Lato", sans-serif;
    font-weight: 400;
    color: white;
    padding: 0rem 2rem 2rem 2rem;
    border-radius: 10rem;
    transition: all .2s;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;

    text-transform: uppercase;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content:center;

    ${getButtonStyles}
    &:hover{
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
        transform: translateY(-3px);
    }
    &:active,
&:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(black,.8);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
}
`;
