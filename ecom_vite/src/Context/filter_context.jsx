import { createContext, useContext , useEffect, useReducer} from "react";
import {useProductContext} from "./ProductContex"
import reducer from "../reducer/FilterReducer"

const initialState = {
    filter_products: [],
    all_products: [],
    loading: true,
    grid_view:true,
};

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleView = () => {
        dispatch({ type: 'TOGGLE_VIEW' });
      };

    const setGridview=()=>{
        return dispatch({type:"SET_GRIDVIEW"})
    }

    useEffect(() => {
        dispatch({ type: "SET_LOADING" })
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state,setGridview,toggleView  }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
