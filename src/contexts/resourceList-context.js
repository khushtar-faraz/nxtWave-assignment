import React, { createContext, useContext, useState } from "react";

const resourceListContext = createContext({});

const ResourceListProvider = ({ children }) => {
  const [resourceList, setResourceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const url =
    "https://media-content.ccbp.in/website/react-assignment/resources.json";

  const fetchResourceList = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log("Fetched data",json);
      setResourceList(json);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setError("Something went Wrong! Please try after sometime");
    }
  };

  console.log(resourceList)

  return (
    <resourceListContext.Provider
      value={{ resourceList, loading, error, fetchResourceList }}
    >
      {children}
    </resourceListContext.Provider>
  );
};

const useResourceListContext = () => useContext(resourceListContext);

export { useResourceListContext, ResourceListProvider };
