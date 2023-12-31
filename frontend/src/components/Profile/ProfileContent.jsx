import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges, MdOutlineTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { loadUser } from "../../redux/actions/user";

import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { backend_url } from "../../server";

const ProfileContent = ({ active }) => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (error) {
  //       toast.error(error);
  //       dispatch({ type: "clearErrors" });
  //     }
  //     if (successMessage) {
  //       toast.success(successMessage);
  //       dispatch({ type: "clearMessages" });
  //     }
  //   }, [error, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

  //   const handleImage = async (e) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setAvatar(reader.result);
  //         axios
  //           .put(
  //             `${server}/user/update-avatar`,
  //             { avatar: reader.result },
  //             {
  //               withCredentials: true,
  //             }
  //           )
  //           .then((response) => {
  //             dispatch(loadUser());
  //             toast.success("avatar updated successfully!");
  //           })
  //           .catch((error) => {
  //             toast.error(error);
  //           });
  //       }
  //     };

  //     reader.readAsDataURL(e.target.files[0]);
  //   };

  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                {/* <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                /> */}
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/*order part  */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* PaymentMethod */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* Change Password */}
      {/* {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )} */}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "33366633333333",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      MinWidth: 150,
      flex: 0.7,
    },
    {
      field: "id",
      headerName: "Order ID",
      MinWidth: 150,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      MinWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      MinWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      MinWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "TND " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "33366633333333",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  //   const eligibleOrders =

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "TND " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  //   const { user } = useSelector((state) => state.user);
  //   const { orders } = useSelector((state) => state.order);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllOrdersOfUser(user._id));
  //   }, []);
  const orders = [
    {
      _id: "33366633333333",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "TND " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between ">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.buttton} !rounded-md`}>
          <span className="text-[#fff] ">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-withe h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://themes.rslahmed.dev/rafcart/assets/images/visa.png"
            alt=""
          />
          <h5 className="pl-5 font-[600]">Wejdene Yazidi</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>123 **** **** ****</h6>
          <h5 className="pl-6 "> 08/2020</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete
            size={25}
            className="cursor-pointer"
          ></AiOutlineDelete>
        </div>
      </div>
    </div>
  );
};
const Address=()=>{
    return (
        <div className="w-full px-5">
          <div className="flex w-full items-center justify-between ">
            <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
             My Adressess
            </h1>
            <div className={`${styles.buttton} !rounded-md`}>
              <span className="text-[#fff] ">Add New</span>
            </div>
          </div>
          <br />
          <div className="w-full bg-withe h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
            <div className="flex items-center">
             
              <h5 className="pl-5 font-[600]">Default Adress</h5>
            </div>
            <div className="pl-8 flex items-center">
              <h6>rue 65200 cite Maroen, Grand Tunis</h6>
             
            </div>
            <div className="pl-8 flex items-center">
              <h6>+216 5 255 222</h6>
             
            </div>
            <div className="min-w-[10%] flex items-center justify-between pl-8">
              <AiOutlineDelete
                size={25}
                className="cursor-pointer"
              ></AiOutlineDelete>
            </div>
          </div>
        </div>
      );
}


export default ProfileContent;
