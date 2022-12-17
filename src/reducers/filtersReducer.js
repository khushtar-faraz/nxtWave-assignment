const filtersReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return { ...state, category: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, search: action.payload };

    case "CLEAR_ALL":
      return { ...state, category: "", search: "" };

    default:
      return state;
  }
};

export default filtersReducer;
