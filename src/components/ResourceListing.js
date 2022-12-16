import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ResourceCard from "./ResourceCard";

const ResourceListing = () => {
  const [resourceList, setResourceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const url =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";

    const fetchResourceList = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setResourceList(json);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        setError("Something went Wrong! Please try after sometime");
      }
    };

    fetchResourceList();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resourceList.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid w-[1144px] gap-x-[32px] gap-y-[32px] grid-cols-3 mt-[32px] relative left-[149px]">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {currentPosts.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            icon={resource.icon_url}
            link={resource.link}
            description={resource.description}
            category={resource.category}
            tag={resource.category}
            id={resource.id}
          />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={resourceList.length}
        paginate={paginate}
      />
    </>
  );
};

export default ResourceListing;
