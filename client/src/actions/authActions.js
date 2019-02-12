import axios from 'axios';
import { GET_ERRORS } from './types';

// Register User
export const registerUser = userData => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then()
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
