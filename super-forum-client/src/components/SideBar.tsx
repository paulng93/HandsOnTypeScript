import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const SideBar = () => {
    const { width } = useWindowDimensions();
    if (width <= 768)
    {
        return null;
    }
    return <main className="sidebar">Side bar</main>
}

export default SideBar;