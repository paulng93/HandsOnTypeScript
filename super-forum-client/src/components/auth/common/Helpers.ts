import { Dispatch } from "react";

// helper function for setting the register button to disabled
export const allowSubmit = (
  dispatch: Dispatch<any>,
  msg: string,
  setDisabled: boolean
) => {
  dispatch({ type: "isSubmitDisabled", payload: setDisabled });
  dispatch({ payload: msg, type: "resultMsg" });
};
