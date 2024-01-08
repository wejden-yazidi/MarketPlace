import axios from "axios";
import { server } from "../../server";
import {
  loadSellerRequest,
  loadSellerSuccess,
  loadSellerFail,
} from "../reducers/seller";
import {
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFail,
} from "../reducers/user";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest());
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch(LoadUserSuccess(data.user));
  } catch (error) {
    dispatch(LoadUserFail(error.response.data.message));
  }
};


export const loadSeller = () => async (dispatch) => {
  try {
    dispatch(loadSellerRequest());
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch(loadSellerSuccess(data.seller));
  } catch (error) {
    dispatch(loadSellerFail(error.response.data.message));
  }
};



// user update information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };

// update user address
export const updatUserAddress =
  (country, city, address1, address2, zipCode, addressType) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateUserAddressRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUserAddressSuccess",
        payload: {
          successMessage: "User address updated succesfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUserAddressFailed",
        payload: error.response.data.message,
      });
    }
  };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

