import axios from 'axios';
export const FETCH_CHARS_START = 'FETCH_CHARS_START';
export const FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS';
export const FETCH_CHARS_FAILURE = 'FETCH_CHARS_FAILURE';

export const getChars = () => dispatch => {
    dispatch({ type: FETCH_CHARS_START});
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            dispatch({ type: FETCH_CHARS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_CHARS_FAILURE, payload: err }));
}
