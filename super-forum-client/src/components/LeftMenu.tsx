import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService";
import Category from "../models/Category";
import "./LeftMenu.css";

const LeftMenu = () => {
    const { width } = useWindowDimensions();

    // state object containing categories
    const [categories, setCategories] = useState<JSX.Element>(
        // default value of the categories
      <div>Left Menu</div>
    );
  
    // The primary purpose of useEffect is to handle side effects in React components. This includes tasks such as data fetching, subscribing to external data sources, or interacting with the browser's APIs.
    useEffect(() => {
        // calls get categories from data service
      getCategories()
        .then((categories: Array<Category>) => {
          const cats = categories.map((cat) => {
            return <li key={cat.id}>{cat.name}</li>;
          });
          // once we have the categories we map it to the function
          setCategories(<ul className="category">{cats}</ul>);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    if (width <= 768) {
      return null;
    }
    return <div className="leftmenu">{categories}</div>;
  };

export default LeftMenu;