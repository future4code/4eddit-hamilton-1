const initialState = {
  list: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return state;
  }
};
