import React, { FC, useState, useEffect } from "react";
import CategoryThread from "../../../models/CategoryThread";
import "./TopCategory.css";

// parameters for the top categories, gets an array of category thread
interface TopCategoryProps {
    topCategories: Array<CategoryThread>
}

const TopCategory: FC<TopCategoryProps> = ({ topCategories }) => {
    const [threads, setThreads] = useState<JSX.Element | undefined>();

    // hook in TypeScript is used in React functional components to perform side effects. 
    // Side effects can include things like data fetching, subscriptions, manual DOM manipulations,
    // or any other operation that does not directly result in rendering UI.
    useEffect(() => {
        if (topCategories && topCategories.length > 0) {
            // array of elements
            const newThreadElements = topCategories.map(top => 
                <li key={top.threadId}>
                    <span className="clickable-span">
                    {top.title}
                    </span>
                </li>
            );
            
            // setting the state of the thread
            setThreads(<ul className="topcat-threads">
                {newThreadElements}
            </ul>);
        }
    }, [topCategories]);

    return (
        <div className="topcat-item-container">
            <div>
                <strong>{topCategories[0].category}</strong>
            </div>
            {threads}
        </div>
    )
}

export default TopCategory;