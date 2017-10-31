import axios from 'axios';
import { FETCH_USER } from './types';

// The code below before refactoring, the same functionality:
//
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('apip/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
