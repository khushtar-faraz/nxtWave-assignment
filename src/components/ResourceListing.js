import React, { useEffect, useState } from "react";
import { useFilters } from "../contexts/filters-context";
import { useResourceListContext } from "../contexts/resourceList-context";
import Pagination from "./Pagination";
import ResourceCard from "./ResourceCard";

const ResourceListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const { loading, error, fetchResourceList } = useResourceListContext();
  const { resourceToBeDisplayed } = useFilters();

  // TODO: implement styling for loading and error states and no result found state
  useEffect(() => {
    fetchResourceList();
  }, []);

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
        totalPosts={resourceToBeDisplayed.length}
        paginate={paginate}
      />
    </>
  );
};

export default ResourceListing;
