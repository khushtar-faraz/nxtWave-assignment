import { createContext, useContext, useReducer } from "react";
import filtersReducer from "../reducers/filtersReducer";
import { filterByCategory, filterBySearch } from "../utils/filterFunctions";
import { useResourceListContext } from "./resourceList-context";

const filtersContext = createContext({
  stateOfFilters: {},
  dispatchOfFilters: () => {},
});

const FiltersProvider = ({ children }) => {
  const { resourceList } = useResourceListContext();
  // console.log("this is",resourceList)

  const initialFiltersState = {
    category: "",
    search: "",
  };

  const [stateOfFilters, dispatchOfFilters] = useReducer(
    filtersReducer,
    initialFiltersState
  );

  const resourceToBeDisplayed = filterBySearch(
    stateOfFilters,
    filterByCategory(stateOfFilters, resourceList)
  );

  return (
    <filtersContext.Provider
      value={{
        stateOfFilters,
        dispatchOfFilters,
        resourceToBeDisplayed,
      }}
    >
      {children}
    </filtersContext.Provider>
  );
};

const useFilters = () => useContext(filtersContext);

export { useFilters, FiltersProvider };
