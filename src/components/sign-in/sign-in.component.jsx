import React from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import {SigninContainer, TitleContainer, ButtonsContainer} from './sign-in.styles';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handelSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});

        } catch(error){
            console.log(error);
        }
    }
    handelChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }
    render(){
        return(
            <SigninContainer>
                <TitleContainer className='title'>I already have an account</TitleContainer>
                <span>Sign in with Email and Password</span>
                <form onSubmit={this.handelSubmit}>
                    <FromInput 
                        name="email" 
                        value={this.state.email} 
                        handelChange={this.handelChange}
                        label='email' 
                        required/>
                    <FromInput 
                        name="password" 
                        value={this.state.password} 
                        handelChange={this.handelChange} 
                        label='password' 
                        required/>
                    <ButtonsContainer>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>

                </form>
            </SigninContainer>
          
        )
    }
};

export default SignIn;