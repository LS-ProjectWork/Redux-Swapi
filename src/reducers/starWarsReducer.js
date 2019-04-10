import /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        characters: [],
        isFetching: true,
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload.characters,
        isFetching: false,
        error: ''
      }
    case FAILURE:
      default:
        return state;
  }
};
