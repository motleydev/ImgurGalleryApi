/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  APPLICATION_FETCHING_DATA,
  APPLICATION_RECEIVED_DATA,
  APPLICATION_ERRORED_DATA
} from '../actions/const';

const initialState = {
  idle: true,
  fetching: false,
  error: null
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  let status = {}
  switch (action.type) {
    case APPLICATION_FETCHING_DATA:

      status = {
        idle: false,
        fetching: true,
        error: null
      }
      // Modify next state depending on the action and return it
      return status;

    case APPLICATION_RECEIVED_DATA:

      status = {
        idle: true,
        fetching: false,
        error: null
      }
      // Modify next state depending on the action and return it
      return status;

    case APPLICATION_ERRORED_DATA:
      status = {
        idle: true,
        fetching: false,
        error: action.parameter
      }
      // Modify next state depending on the action and return it
      return status;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
