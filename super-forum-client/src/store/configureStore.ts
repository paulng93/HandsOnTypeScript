import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./AppState";

// adding redux store to managed app state
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