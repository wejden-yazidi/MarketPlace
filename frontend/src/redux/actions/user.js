import axios from "axios";
import { server } from "../../server";
import { loadSellerRequest, loadSellerSuccess, loadSellerFail } from "../reducers/seller";
// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// load seller
// export const loadSeller = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadSellerRequest",
//     });
//     const { data } = await axios.get(`${server}/shop/getSeller`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadSellerSuccess",
//       payload: data.seller,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadSellerFail",
//       payload: error.response.data.message,
//     });
//   }
// };
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch(loadSellerRequest()); // Use the action creator instead of type
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch(loadSellerSuccess(data.seller)); // Use the action creator and pass the payload
  } catch (error) {
    dispatch(loadSellerFail(error.response.data.message)); // Use the action creator and pass the payload
  }
};