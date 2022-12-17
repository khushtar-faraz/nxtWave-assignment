import React, { createContext, useContext, useEffect, useState } from "react";

const resourceListContext = createContext({});

const ResourceListProvider = ({ children }) => {
  const [resourceList, setResourceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";

    const fetchResourceList = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResourceList(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Something went Wrong! Please try after sometime");
      }
    };
    fetchResourceList();
  }, []);


  return (
    <resourceListContext.Provider
      value={{
        resourceList,
        loading,
        error,
        setResourceList,
      }}
    >
      {children}
    </resourceListContext.Provider>
  );
};

const useResourceListContext = () => useContext(resourceListContext);

export { useResourceListContext, ResourceListProvider };
