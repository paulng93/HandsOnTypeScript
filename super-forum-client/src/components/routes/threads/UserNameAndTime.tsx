import React, { FC } from "react";
import { getTimePastIfLessThanDay } from "../../../common/dates";

interface UserNameAndTimeProps {
  userName?: string;
  lastModifiedOn?: Date;
}

// component for user name and time
// uses common function that takes a date and returns a formatted date
const UserNameAndTime: FC<UserNameAndTimeProps> = ({
  userName,
  lastModifiedOn,
}) => {
  return (
    <span>
      <strong>{userName}</strong>
      <label style={{ marginLeft: "1em" }}>
        {lastModifiedOn ? getTimePastIfLessThanDay(lastModifiedOn) : ""}
      </label>
    </span>
  );
};

export default UserNameAndTime;
