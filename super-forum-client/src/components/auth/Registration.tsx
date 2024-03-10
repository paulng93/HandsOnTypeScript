import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
import "./Registration.css";
import { PasswordTestResult, isPasswordValid } from "../../common/validators/PasswordValidator";
import ModalProps from "../types/ModalProps";
import userReducer from "./common/UserReducer";

const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
    const [isRegisteredDisabled, setRegisterDisabled] = useState(true);
    const [
        { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled },
        dispatch,
      ] = useReducer(userReducer, {
        userName: "davec",
        password: "",
        email: "admin@dzhaven.com",
        passwordConfirm: "",
        resultMsg: "",
        isSubmitDisabled: true,
      });

      // helper function for setting the register button to disabled
      const allowRegister = (msg: string, setDisabled: boolean) => {
        setRegisterDisabled(setDisabled);
        dispatch({payload: msg, type: "resultMsg"});
      }

      // series of onchanged handlers
      const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "userName" });
        if (!e.target.value)
        allowRegister("Username cannot be empty", true);
        else allowRegister("", false);
      };

      const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "email" });
        if (!e.target.value) allowRegister("Email cannot be empty", true);
        else allowRegister("", false);
      };

      const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "password" });
        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
    
        if (!passwordCheck.isValid) {
            allowRegister(passwordCheck.message, true);
          return;
        }
        passwordsSame(passwordConfirm, e.target.value);
      };

      const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "passwordConfirm" });
        passwordsSame(password, e.target.value);
      };

      const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowRegister("Passwords do not match", true);
          return false;
        } else {
            allowRegister("", false);
          return true;
        }
      };

      const onClickRegister = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        e.preventDefault();
        onClickToggle(e);
      };
    
      const onClickCancel = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        onClickToggle(e);
      };

      return (
        <ReactModal
          className="modal-menu"
          isOpen={isOpen}
          onRequestClose={onClickToggle}
          shouldCloseOnOverlayClick={true}
        >
          <form>
            <div className="reg-inputs">
              <div>
                <label>username</label>
                <input type="text" value={userName} onChange={onChangeUserName} />
              </div>
              <div>
                <label>email</label>
                <input type="text" value={email} onChange={onChangeEmail} />
              </div>
              <div>
                <label>password</label>
                <input type="password" placeholder="password" value={password} onChange={onChangePassword}/>
              </div>
              <div>
                <label>password confirmation</label>
                <input type="password" placeholder="Password Confirmation" value={passwordConfirm} onChange={onChangePasswordConfirm}/>
              </div>
            </div>
            <div className="form-buttons">
              <div className="form-btn-left">
                <button
                  style={{ marginLeft: ".5em" }}
                  className="action-btn"
                  disabled={isSubmitDisabled}
                  onClick={onClickRegister}
                >
                  Register
                </button>
                <button
                  style={{ marginLeft: ".5em" }}
                  className="cancel-btn"
                  onClick={onClickCancel}
                >
                  Close
                </button>
              </div>
              <span className="form-btn-right">
                <strong>{resultMsg}</strong>
              </span>
            </div>
          </form>
        </ReactModal>
      );
};

export default Registration;
