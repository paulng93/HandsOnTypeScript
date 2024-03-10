export const UserProfileSetType = "USER_PROFILE_SET";

// defining the user profile payload to be stored in redux
export interface UserProfilePayload {
  id: string;
  userName: string;
}

// action type so the reducer can be distinguished from other reducers
export interface UserProfileAction {
  type: string;
  payload: UserProfilePayload | null;
}

// reducers are used to manage the state of your application. 
// They are pure functions that take the current state and an action as arguments and return the new state.
// Reducers specify how the application's state should change in response to actions dispatched to the Redux store.
export const UserProfileReducer = (
  state: any = null,
  action: UserProfileAction
): UserProfilePayload | null => {
  switch (action.type) {
    case UserProfileSetType:
      return action.payload;
    default:
      return state;
  }
};
