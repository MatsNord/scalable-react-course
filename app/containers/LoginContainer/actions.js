/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  CANCEL_LOGiN,
} from './constants';


export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}

export function cancelLogin(){
  return {
    type: CANCEL_LOGiN,
  }
}

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }
