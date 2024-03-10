import { combineReducers } from "redux";
import { UserProfileReducer } from "./user/Reducer";

// default root reducer that combines all future reducers
export const rootReducer = combineReducers({
  user: UserProfileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
