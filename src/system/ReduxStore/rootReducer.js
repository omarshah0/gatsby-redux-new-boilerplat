const initialState = {
  counter: 0,
  authStatus: false,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case "SET_AUTH":
      return {
        ...state,
        authStatus: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
