/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import classNames from 'classnames';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // instead of doing this.state in the constructor 
  state = {};
  
  // Binding the field to this component. 
  // The alternative would be to bind the field with .bind(this);
  login = () => {
    const email = this.emailField.value;
    if (!validator.validate( email )){
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }
    this.setState({
      errorText: null,
    });
  }


  // login() {
  // use bind on the button
  //   console.log('login button clicked!', this.emailField.value);
  // }
  render() {
    const fieldError = this.state.errorText ? (
      <div
        className={styles.errorMessage}
      >
        {this.state.errorText}
      </div>
    ) : null;
    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
        </div>
        <input
          className={classNames( styles.input, {[styles.inputError]:this.state.errorText})}
          placeholder="Your email"
          ref={(f) => { this.emailField = f; }}
          type="text"
        />
        {fieldError}
        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
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
