import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./AppState";

// friendly abstraction over Redux CreateStore() function 
export default configureStore({
  reducer: rootReducer,
});

/*
const configureStore = () => {
  return createStore(rootReducer, {});
};

export default configureStore;
*/