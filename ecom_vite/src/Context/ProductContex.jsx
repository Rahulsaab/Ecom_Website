import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"
const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  fetaureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

//   API FOR ALL PRODUCTS

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get("https://api.pujakaitem.com/api/products");
      const Products = await res.data;
      dispatch({ type: "SET_API_DATA",payload:products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

//   API FOR SINGLE PRODUCT

const getSingleProduct = async()=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try{
        const res = await axios.get("https://api.pujakaitem.com/api/products")
        const singleProduct= await res.data
        dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
    }
    catch(error){
        dispatch({type:"SET_SINGLE_ERROR"})
    }
}

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
