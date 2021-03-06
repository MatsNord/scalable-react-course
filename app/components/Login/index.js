/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import TextInput from '../TextInput';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
 // This is an alternative way of defining proptypes rules on a React ES6 class 
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  }
  // instead of doing this.state in the constructor 
  state = {};
  // But why don't just put i constructor there??
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  
  // Binding the field to this component. 
  // The alternative would be to bind the field with .bind(this);
  login = () => {
    const email = this.emailField.value();
    if (!validator.validate( email )){
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }
    this.setState({
      errorText: null,
    });

    this.props.login(email);
  }


  // login() {
  // use bind on the button
  //   console.log('login button clicked!', this.emailField.value);
  // }
  render() {
    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
        </div>
        <TextInput
          placeholder="Your email"
          ref={(f) => { this.emailField = f; }}
          errorText={this.state.errorText}
        />
        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            //onClick={this.login.bind(this)}
            onClick={this.login}
          >
            login in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
