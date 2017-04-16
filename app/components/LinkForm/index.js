/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  // State should probably be handled in the constructor.
  state = {};

  // onstructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
     <div className={styles.LinkForm}>
        <div
          className={styles.heading}
        >
            Add a Link
        </div>
        <input
          className={classNames( styles.input, {[styles.inputError]:this.state.errorText})}
          placeholder="URL"
          ref={(f) => { this.urlField = f; }}
          type="text"
        />
        <input
          className={classNames( styles.input, {[styles.inputError]:this.state.errorText})}
          placeholder="Description"
          ref={(f) => { this.descriptionField = f; }}
          type="text"
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

export default LinkForm;
