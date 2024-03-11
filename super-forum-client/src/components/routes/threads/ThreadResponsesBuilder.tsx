import React, { FC, useEffect, useState } from "react";
import ThreadItem from "../../../models/ThreadItem";
import ThreadResponse from "./ThreadResponse";

// receive a list of props of thread items
interface ThreadResponsesBuilderProps {
  threadItems?: Array<ThreadItem>;
}

// act as a thread response factory
const ThreadResponsesBuilder: FC<ThreadResponsesBuilderProps> = ({
  threadItems,
}) => {
  // JSX element that's used to contain response elements
  const [responseElements, setResponseElements] = useState<
    JSX.Element | undefined
  >();

  // run on initialization 
  useEffect(() => {
    if (threadItems) {
      const thResponses = threadItems.map((ti) => {
        return (
          <li key={`thr-${ti.id}`}>
            <ThreadResponse
              body={ti.body}
              userName={ti.userName}
              lastModifiedOn={ti.createdOn}
              points={ti.points}
            />
          </li>
        );
      });
      setResponseElements(<ul>{thResponses}</ul>);
    }
  }, [threadItems]);

  return (
    <div className="thread-body-container">
      <strong style={{ marginBottom: ".75em" }}>Responses</strong>
      {responseElements}
    </div>
  );
};

export default ThreadResponsesBuilder;
