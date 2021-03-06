/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {SET_CHOSEN_IMAGE} from '../actions/const';

const initialState = {};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case SET_CHOSEN_IMAGE:
      // Modify next state depending on the action and return it
      return action.parameter;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
