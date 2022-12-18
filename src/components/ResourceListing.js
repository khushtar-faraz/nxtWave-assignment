import React from "react";
import { useFilters } from "../contexts/filters-context";
import { usePaginationContext } from "../contexts/pagination-context";
import { useResourceListContext } from "../contexts/resourceList-context";
import Pagination from "./Pagination";
import ResourceCard from "./ResourceCard";

const ResourceListing = () => {
  const { loading, error } = useResourceListContext();
  const { resourceToBeDisplayed } = useFilters();
  const { postsPerPage, currentPosts } = usePaginationContext();

  return (
    <>
      <div className="grid justify-center items-center grid-cols-1 mt-4 md:grid-cols-2 md:gap-x-[5px] md:gap-y-[5px] lg:grid-cols-3 lg:gap-x-[10px] lg:gap-y-[10px] xl:w-[1144px] xl:gap-x-[20px] xl:gap-y-[20px] xl:mt-[32px] xl:relative xl:left-[100px]">
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
      />
    </>
  );
};

export default ResourceListing;
