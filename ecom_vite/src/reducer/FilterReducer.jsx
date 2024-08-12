const reducer = (state, action) => {
    switch(action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: action.payload,
                all_products: action.payload,
                loading: false
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
export default reducer;
