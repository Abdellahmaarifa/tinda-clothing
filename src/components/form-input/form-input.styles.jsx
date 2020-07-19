import styled, {css} from 'styled-components';
const subColor = '#777';
const mainColor = '#2c3e50';
const shrinkLabelStyled = css`
    top: -24px;
    font-size: 16px;
    color: ${mainColor};
`;
export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 15px 25px 15px 25px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin: 25px 0;

    &:focus {
      outline: none;
    }
    &:focus ~ label {
        ${shrinkLabelStyled}
    }
`;
const getShrink = props => {
    if (props.shrink ){
        return shrinkLabelStyled 
    }
};
export const FormInputLabelContainer = styled.label`
    color: ${subColor};
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 300ms ease all;
    ${getShrink}
`;