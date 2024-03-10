import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRegistered,
    faSignInAlt,
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";
import Registration from "../auth/Registration";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import { AppState } from "../../store/AppState";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../../store/user/Reducer";

const SideBarMenus = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    //  The primary purpose of "useSelector" is to select and extract specific data from the Redux store state. 
    const user = useSelector((state: AppState) => state.user);

    const onClickToggleRegister = () => {
        setShowRegister(!showRegister);
      };
    
      const onClickToggleLogin = () => {
        setShowLogin(!showLogin);
      };
    
      const onClickToggleLogout = () => {
        setShowLogout(!showLogout);
      };

    //  is to dispatch actions to the Redux store. Actions are plain JavaScript objects that describe changes to the application's state. 
    const dispatch = useDispatch();

    // // The primary purpose of useEffect is to handle side effects in React components. This includes tasks such as data fetching, subscribing to external data sources, or interacting with the browser's APIs.
    useEffect(() => {
        // dispatching the reducer of the redux store
        dispatch({
            type: UserProfileSetType, // type
            payload: { // UserProfilePayload
                id: 1,
                userName: "testUser",
            },
        });
    }, [dispatch]);

    return (
        <React.Fragment>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">{user?.userName}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span onClick={onClickToggleRegister} className="menu-name">
                        register
                    </span>
                    <Registration
                        isOpen={showRegister}
                        onClickToggle={onClickToggleRegister}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span onClick={onClickToggleLogin} className="menu-name">
                        login
                    </span>
                    <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span onClick={onClickToggleLogout} className="menu-name">
                        logout
                    </span>
                    <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
                </li>
            </ul>
        </React.Fragment>
    )
};

export default SideBarMenus;