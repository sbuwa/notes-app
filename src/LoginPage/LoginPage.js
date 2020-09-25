import React, { Component } from 'react';
import logo from '../assets/images/sam-logo.png';
import './LoginPage.css';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uName: '',
			uPassword: '',
		};
	}

	onSubmitPress = () => {};

	render() {
		return (
			<div>
				<form className='login-form'>
					<img className='img-logo' src={logo} alt='logo'></img>
					<br></br>
					<input type='text' placeholder='username'></input>
					<br></br>
					<input type='password' placeholder='password'></input>
					<br></br>
					<input
						type='submit'
						value='login'
						className='btn-submit'
						onClick={this.onSubmitPress}></input>
				</form>
			</div>
		);
	}
}

export default LoginPage;
