import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import {SignupContainer, TitleContainer} from './sign-up.styles';

class SignUp extends React.Component {

    constructor(){
        super();

        this.state = {
            dispalyName:'',
            email:'',
            password:'',
            confirmPassword:''
        }


    }
    handelSubmit = async event => {
        event.preventDefault();
        const {dispalyName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("Password Don't match");
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { dispalyName })
            this.setState({
                dispalyName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.log(error, error.message);
        }
    }

    handelChange = event => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }
    render(){
        const {dispalyName, email, password, confirmPassword} = this.state;
        return(
            <SignupContainer>
                <TitleContainer> I do not have an account</TitleContainer>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        type='text'
                        name='dispalyName'
                        value={dispalyName}
                        onChange={this.handelChange}
                        label='Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handelChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handelChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handelChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    

                </form>
            </SignupContainer>
        )
    }

}

export default SignUp;