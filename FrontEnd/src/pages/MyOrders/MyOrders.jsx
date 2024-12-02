import React, { useContext } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../components/context/StoreContext";
import axios from "axios";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders",{},{headers:{token}});
    setData(response.data.data)
  };

  return <div></div>;
};

export default MyOrders;
