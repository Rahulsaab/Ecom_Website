const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: action.payload,
        all_products: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "TOGGLE_VIEW":
      return { ...state, grid_view: !state.grid_view };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    default:
      return state;
  }
};
export default reducer;
