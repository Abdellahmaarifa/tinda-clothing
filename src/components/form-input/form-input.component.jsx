import React from 'react';
import {GroupContainer, FormInputContainer, FormInputLabelContainer} from './form-input.styles';
const FromInput = ({ handelChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handelChange} {...otherProps}/>
    
    {
        label ? 
        (
            (<FormInputLabelContainer shrink={otherProps.value.length}>
            {label}
            </FormInputLabelContainer>)
        )
        : null

    }
    </GroupContainer>
);


export default FromInput;