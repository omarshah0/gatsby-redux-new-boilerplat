import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../ReduxStore/rootReducer"

const store = createStore(rootReducer)

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
