export const filterByCategory = (filterState, listData) => {
  if (filterState.category) {
    return listData.filter((element) => element.tag === filterState.category);
  } else return listData;
};

export const filterBySearch = (filterState, receivedData) => {
  let searchTerm = filterState.search;
  if (searchTerm.trim().length === 0) return receivedData;
  else
    return receivedData.filter(
      ({ title, description, category, tag }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
};
