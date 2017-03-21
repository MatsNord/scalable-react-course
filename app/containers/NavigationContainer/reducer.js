/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: 'links to usefule libraries'
    },
    {
      name: 'apps',
      description: 'links to new and existing apps'
    },
    {
      name: 'news',
      description: 'links to programming news articles'
    },
  ]

});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
