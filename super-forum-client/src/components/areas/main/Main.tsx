import React , { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useParams } from "react-router-dom";
import ThreadCard from "./ThreadCard";
import { getThreadsByCategory } from "../../../services/DataService";
import Category from "../../../models/Category";

const Main = () => {
    // It is used to access the parameters (or route match parameters) from the current URL in a React functional component.
    const { categoryId } = useParams();

    // hook is a fundamental hook in React that allows functional components to manage state within their instances.
    const [category, setCategory] = useState<Category | undefined>();
    const [threadCards, setThreadCards] = useState<Array<JSX.Element> | null>(
      null
    );
  
    // updating list of cards threadcards if we get a new category Id
    // Creates the Thread card here by passing in the thread
    useEffect(() => {
      console.log("main categoryId", categoryId);
  
      if (categoryId && Number(categoryId) > 0) {
        getThreadsByCategory(categoryId).then((threads) => {
          const cards = threads.map((th) => {
            return <ThreadCard key={`thread-${th.id}`} thread={th} />;
          });
          if (!category) {
            setCategory(threads[0].category);
          }
          setThreadCards(cards);
        });
      }
    }, [categoryId]);
  
    return (
      <main className="content">
        <MainHeader category={category} />
        <div>{threadCards}</div>
      </main>
    );
  };
  
  export default Main;