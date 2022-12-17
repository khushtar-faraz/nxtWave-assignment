import React from 'react'
import FilterTabs from '../components/FilterTabs'
import Header from '../components/Header'
import ResourceListing from '../components/ResourceListing'
import Search from '../components/Search'

const ResourceDetailsScreen = () => {
  return (
    <div className="w-[100vw] h-auto bg-[#fbfbfb]">
    <Header />
    <main>
      <FilterTabs />
      <Search />
      <ResourceListing />
    </main>
  </div>
  )
}

export default ResourceDetailsScreen
