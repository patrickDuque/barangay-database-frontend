/* eslint-disable default-case */
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  tricycles : [],
  loading   : false,
  error     : null
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.SUBMIT_TRICYCLE_START:
      newState.loading = true;
      break;
    case actionTypes.SUBMIT_TRICYCLE_SUCCESS:
      newState.error = null;
      newState.loading = false;
      break;
    case actionTypes.SUBMIT_TRICYCLE_FAIL:
      newState.error = action.error;
      newState.loading = false;
      break;
    case actionTypes.GET_TRICYCLE_START:
      newState.loading = true;
      break;
    case actionTypes.GET_TRICYCLE_SUCCESS:
      newState.tricycles = action.tricycles;
      newState.loading = false;
      newState.error = null;
      break;
    case actionTypes.GET_TRICYCLE_FAIL:
      newState.error = action.error;
      newState.loading = false;
      break;
    case actionTypes.DELETE_TRICYCLE:
      newState.tricycles = state.tricycles.filter(tricyle => tricyle._id !== action.id);
      break;
  }
  return newState;
};

export default reducer;