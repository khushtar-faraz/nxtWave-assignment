import React, { useState } from "react";
import { useFilters } from "../contexts/filters-context";
import { useResourceListContext } from "../contexts/resourceList-context";
import Pagination from "./Pagination";
import ResourceCard from "./ResourceCard";

const ResourceListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const { loading, error } = useResourceListContext();
  const { resourceToBeDisplayed } = useFilters();

  // TODO: implement styling for loading and error states and no result found state

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1144px] gap-x-[20px] gap-y-[20px] mt-[32px] relative left-[100px]">
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
        totalPosts={resourceToBeDisplayed.length}
        paginate={paginate}
      />
    </>
  );
};

export default ResourceListing;
