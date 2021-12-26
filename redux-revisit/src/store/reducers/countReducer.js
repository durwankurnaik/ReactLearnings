const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state
  }
};

export default countReducer
