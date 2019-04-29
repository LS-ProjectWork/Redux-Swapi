import {FETCH_CHARS_START, FETCH_CHARS_SUCCESS, FETCH_CHARS_FAILURE} from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        characters: [],
        isFetching: true,
        error: ''
      }
    case FETCH_CHARS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isFetching: false,
        error: ''
      }
    case FETCH_CHARS_FAILURE:
      default:
        return state;
  }
};
