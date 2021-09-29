import {
  UPDATE_VALUE_SUCCESS,
  UPDATE_VALUE_FAIL,
  GET_VALUE_SUCCESS,
  GET_VALUE_FAIL,
} from "../actions/types";

const initialState = [];

export default function wallet(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VALUE_SUCCESS:
      return {
        payload,
      };
    case GET_VALUE_FAIL:
      return {
        ...state,
      };
    case UPDATE_VALUE_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_VALUE_FAIL:
      return {
        state,
      };

    default:
      return state;
  }
}
