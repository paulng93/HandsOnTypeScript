import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRegistered,
    faSignInAlt,
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";
import { AppState } from "../../store/AppState";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../../store/user/Reducer";

const SideBarMenus = () => {
    //  The primary purpose of "useSelector" is to select and extract specific data from the Redux store state. 
    const user = useSelector((state: AppState) => state.user);

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
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-name">{user?.userName}</span>
            </ul>
        </React.Fragment>
    )
}

export default SideBarMenus;