import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const LeftMenu = () => {
    const { width } = useWindowDimensions();
    if (width <= 768)
    {
        return null;
    }
    return <main className="leftmenu">Left Menu</main>
}

export default LeftMenu;