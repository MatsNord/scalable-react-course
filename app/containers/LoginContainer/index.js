/*
 *
 * LoginContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';
import Login from '../../components/Login';
import { login, cancelLogin } from './actions';


//Here i use a ES6 class Component to store some state
// that can be references to, in this case the AppBar component
// Note! The class is not needed if you opt for redux-forms.
// With redux-forms, it still possible to use stateless components
// and the it will just work.
export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
       <Login {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    login: (email) => dispatch(login(email)),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
