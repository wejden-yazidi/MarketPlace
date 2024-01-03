import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller, error } = useSelector((state) => state.seller); // Include error state

  if (isLoading) {
    return <Loader />;
  } else if (!isSeller) {
    return <Navigate to={`/shop-login`} replace />;
  } else if (error) {
    // Handle the error, e.g., display an error message or redirect to an error page
    return <div>Error: {error.message}</div>; // Example error handling
  } else {
    return children;
  }
};

export default SellerProtectedRoute;
