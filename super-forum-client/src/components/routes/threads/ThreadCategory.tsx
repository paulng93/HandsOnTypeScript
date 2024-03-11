import React, { FC } from "react";
import DropDown, { Option } from "react-dropdown";
import "react-dropdown/style.css";

// pass in an optional category name
interface ThreadCategoryProps {
  categoryName?: string;
}

const ThreadCategory: FC<ThreadCategoryProps> = ({ categoryName }) => {

  // contains the items that will appear as selectable options in dropdown
  const catOptions: Array<string | Option> = [
    {
      value: "1",
      label: "Programming",
    },
    {
      value: "2",
      label: "Cooking",
    },
  ];

  const defaultOption = catOptions[0];

  // on change function
  const onChangeDropDown = (arg: Option) => {
    console.log(arg);
  };

  return (
    <div className="thread-category-container">
      <strong>{categoryName}</strong>
      <DropDown
        className="thread-category-dropdown"
        options={catOptions}
        onChange={onChangeDropDown}
        value={defaultOption}
        placeholder="Select a category"
      />
    </div>
  );
};

export default ThreadCategory;
