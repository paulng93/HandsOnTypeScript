import React, { FC } from "react";
import UserNameAndTime from "./UserNameAndTime";

interface ThreadHeaderProps {
  userName?: string;
  lastModifiedOn: Date;
  title?: string;
}

// child component representing the thead header
const ThreadHeader: FC<ThreadHeaderProps> = ({
  userName,
  lastModifiedOn,
  title,
}) => {
  return (
    <div className="thread-header-container">
      <h3>{title}</h3>
      <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
    </div>
  );
};

export default ThreadHeader;
