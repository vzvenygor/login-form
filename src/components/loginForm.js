import React from 'react';
import '../components/loginForm.css';

class LoginForm extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            email: '',
            pass: ''
        }

        this.inputData = this.inputData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    inputData(e) {
        if(e.target.type === 'email') {
            this.setState({
                email: e.target.value
            })
        }else {
            this.setState({
                pass: e.target.value
            })
        };
    };

    onSubmit(e) {
        alert('Sign in sucsesfull');
    };

    render() {
        return(
            <div className='login-form'>
                <form className='form'>
                    <h1>SIGN IN TO YOUR ACCOUNT</h1>
                    <input 
                        className='input'
                        onChange={this.inputData}
                        value={this.state.email}
                        placeholder='Enter your email'
                        type='email'
                        required
                    />
                    <br/>
                    <input 
                        className='input'
                        onChange={this.inputData}
                        value={this.state.pass}
                        placeholder='Enter your password'
                        type='password'
                        required
                    />
                    <br/>
                    <label  
                        className='label'>
                        <input 
                            className='checkbox' 
                            type="checkbox"  
                            required
                        />
						<span>Keep me sign in</span>		
					</label>
                    <br/>

                    <button className='button' onClick={() => this.onSubmit()} type='submit'>
                        SIGN IN
                    </button>
                    <br/>
                    <div className='link'>
                        <a href='#'target='blanck'>Forgot your password?</a>
                    </div>
                </form>
            </div>

        )
    }
};

export default LoginForm;
