/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  // State should probably be handled in the constructor.
  state = {};

  // onstructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
        <div className={styles.overlay}>
          <div className={styles.linkForm}>
            
            <div
              className={styles.heading}
            >
             Add a Link
            </div>
            
            <TextInput
              placeholder="URL"
              className={styles.input}
            >
            </TextInput>
            
            <TextInput
              placeholder="Description"
              className={styles.input}
            >
            </TextInput>
            
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
              >
               add
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
