import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.awsugn.biz/clothes/";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  occasionProducts: [],
  latestProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  isImageLoading: false,
  productImages: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //   Api for product details

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
    //   console.log("data3", res.data)
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }; 
  
  const getProductImages = async (url) => {
    dispatch({ type: "SET_IMAGES_LOADING" });
    try {
      const res = await axios.get(url);
      const productImages = await res.data.results;
      console.log("data3", res.data.results)
      dispatch({ type: "SET_PRODUCT_IMAGES", payload: productImages });
    } catch (error) {
      dispatch({ type: "SET_IMAGE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct, getProductImages }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };