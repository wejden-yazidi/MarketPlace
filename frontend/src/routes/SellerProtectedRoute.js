import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import {MyLoader} from "../components/Layout/Loader";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading,isSeller } = useSelector((state) => state.seller);
  // if (isLoading === true) {
  //   return <MyLoader />;
  // } else {
    
    if (!isSeller) {
      return <Navigate to={`/shop-login`} replace />;
    }
    return children;
  }

// };

export default SellerProtectedRoute;