// Custom hook to handle infinite scrolling (e.g., See containers/Reading.js)
import { useState, useEffect } from "react";

// We want this hook to call whatever function we pass into cb after
// scrollbar has reached bottom of page
const useInfiniteScroll = (cb) => {
  const [isFetching, setIsFetching] = useState(false);

  // empty array as second parameter means only run this once; when the component first mounts
  useEffect(() => {
    // every time the window scrolls, call 'handleScroll'
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // listens for a change to isFetching
  useEffect(() => {
    if (!isFetching) return;
    cb(() => {
      console.log("called back");
    });
  }, [isFetching]);

  // custom function that will set the state of isFetching to true whenever we scroll to the bottom of a page
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching)
      return;
    setIsFetching(true);
  };

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
