import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../hooks/useWindowDimensions"; 
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SideBarMenus";

const Nav = () => {
    // hook to grab state to determine to show modal menu
    const [showMenu, setShowMenu] = useState(false);
    // custom hook to determine width
    const { width } = useWindowDimensions();

    // if on mobile, return hamburger icon
    const getMobileMenu = () => {
        if (width <= 768) {
          return (
            <FontAwesomeIcon
              onClick={onClickToggle}
              icon={faBars}
              size="lg"
              className="nav-mobile-menu"
            />
          );
        }
        return null;
      };

      // is used in front awesome icon inside get mobile menu to toggle show menu local state
      const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
        setShowMenu(!showMenu);
      };

      // sets the state of showMenu to false to close modal or it will not go away
      const onRequestClose = (
        e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
      ) => {
        setShowMenu(false);
      };

      return (
        <React.Fragment>
          <ReactModal
            className="modal-menu"
            isOpen={showMenu}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
          >
            <SideBarMenus />
          </ReactModal>
          <nav>
            {getMobileMenu()}
            <strong>SuperForum</strong>
          </nav>
        </React.Fragment>
      );
};

export default Nav;