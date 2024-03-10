import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { getTopCategories } from "../../../services/DataService";
import groupBy from "lodash/groupBy";
import "./RightMenu.css";
import TopCategory from "./TopCategory";

const RightMenu = () => {
    const { width } = useWindowDimensions();
    // array state object to store top categories
    const [topCategories, setTopCategories] = useState<Array<JSX.Element> | undefined>();

    // hook to download make api call, then use lodash group by function.
    useEffect(() => {
        // API call
        getTopCategories().then((res) => {
            // group them by category creating dictionary category -> CategoryThread
          const topCatThreads = groupBy(res, "category");
          const topElements = [];

          // foreach category, create a top category element
          for (let key in topCatThreads) {
            const currentTop = topCatThreads[key];
            topElements.push(<TopCategory key={key} topCategories={currentTop} />);
          }
          // setting the state
          setTopCategories(topElements);
        });
      }, []);

    if (width <= 768)
    {
        return null;
    }

    return <div className="rightmenu rightmenu-container">{topCategories}</div>;
}

export default RightMenu;