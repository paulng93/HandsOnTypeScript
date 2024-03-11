import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Thread.css";
import ThreadHeader from "./ThreadHeader";
import ThreadCategory from "./ThreadCategory";
import ThreadTitle from "./ThreadTitle";
// importing as ThreadModel as type is 'Thread'
import ThreadModel from "../../../models/Thread";
import { getThreadById } from "../../../services/DataService";
import Nav from "../../areas/Nav";
import ThreadBody from "./ThreadBody";
import ThreadResponsesBuilder from "./ThreadResponsesBuilder";
import ThreadPointsBar from "../../points/ThreadPointsBar";

const Thread = () => {
  // create local thread state object
  const [thread, setThread] = useState<ThreadModel | undefined>();
  // get Id from URL
  const { id } = useParams();

  // make API call to get thread by ID
  useEffect(() => {
    console.log("Thread id", id);
    if (id && Number(id) > 0) {
      getThreadById(id).then((th) => {
        // set the thread to local state object
        setThread(th);
      });
    }
  }, [id]);

  // include thread header with non null lastModifiedOn, using ternary check
  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Nav />
      </div>
      <div className="thread-content-container">
        <div className="thread-content-post-container">
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          <ThreadCategory categoryName={thread?.category?.name} />
          <ThreadTitle title={thread?.title} />
          <ThreadBody body={thread?.body} />
        </div>
        <div className="thread-content-points-container">
          <ThreadPointsBar
            points={thread?.points || 0}
            responseCount={
              thread && thread.threadItems && thread.threadItems.length
            }
          />
        </div>
      </div>
      <div className="thread-content-response-container">
        <hr className="thread-section-divider" />
        <ThreadResponsesBuilder threadItems={thread?.threadItems} />
      </div>
    </div>
  );
};

export default Thread;
