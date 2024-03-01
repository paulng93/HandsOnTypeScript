import { useState, useEffect } from "react";

// create interface to type in what is returned from the hook
// in this case is the browser's window object dimensions
export interface WindowDimension {
  height: number;
  width: number;
}

// return type of WindowDimension 
export const useWindowDimensions = (): WindowDimension => {
    // use state hook returns initial state, setter function 
  const [dimension, setDimension] = useState<WindowDimension>({
    height: 0,
    width: 0,
  });

  // handler function that uses state update method to set our dimension values
  // the window object of our browser provides the dimension values
  const handleResize = () => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
 
  // use effect hook that taps into lifecycle policy function 
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty array means that this will run only once on first load 

  return dimension;
};
