import axios from "axios";
import {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
} from "../reducers/product";
import { server } from "../../server";

// create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch(productCreateRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );

    dispatch(productCreateSuccess(data.product));
  } catch (error) {
    dispatch(
      productCreateFail(
        error.response ? error.response.data.message : "Unknown error occurred"
      )
    );
  }
};

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_PRODUCTS_SHOP_REQUEST",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );

    dispatch({
      type: "GET_ALL_PRODUCTS_SHOP_SUCCESS",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCTS_SHOP_FAILED",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PRODUCT_REQUEST",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "DELETE_PRODUCT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PRODUCT_FAILED",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_PRODUCTS_REQUEST",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);

    dispatch({
      type: "GET_ALL_PRODUCTS_SUCCESS",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCTS_FAILED",
      payload: error.response.data.message,
    });
  }
};
