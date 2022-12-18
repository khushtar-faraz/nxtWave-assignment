import { createContext, useContext, useState } from "react";
import { useFilters } from "./filters-context";

const paginationContext = createContext({});

const PaginationContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [toggleState, setToggleState] = useState(1);

  const { resourceToBeDisplayed } = useFilters();

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resourceToBeDisplayed.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <paginationContext.Provider
      value={{
        currentPage,
        currentPosts,
        paginate,
        postsPerPage,
        setToggleState,
        toggleState,
      }}
    >
      {children}
    </paginationContext.Provider>
  );
};

const usePaginationContext = () => useContext(paginationContext);

export { usePaginationContext, PaginationContextProvider };
