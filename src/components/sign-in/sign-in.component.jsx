import React from 'react';

import './sign-in.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handelSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handelChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
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
                    <div className='buttons'>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
          
        )
    }
};

export default SignIn;