import {
  UPDATE_VALUE_SUCCESS,
  UPDATE_VALUE_FAIL,
  SET_MESSAGE,
  GET_VALUE_SUCCESS,
  GET_VALUE_FAIL,
} from "./types";
import userService from "../services/user.service";

export const getUserWallet = (userId) => (dispatch) => {
  return userService.getUserWallet(userId).then(
    (response) => {
      dispatch({
        type: GET_VALUE_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: GET_VALUE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const updateUserWallet = (userId, data) => (dispatch) => {
  return userService.updateUserWallet(userId, data).then(
    (response) => {
      dispatch({
        type: UPDATE_VALUE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: UPDATE_VALUE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};
