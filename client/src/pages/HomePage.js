import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
// import { Row } from "antd";
// import DoctorList from "../components/DoctorList";
const HomePage = () => {
  // const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      // if (res.data.success) {
      //   setDoctors(res.data.data);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
    <div>
      <h1>Home Page</h1>
    </div>
    </Layout>
  );
};

export default HomePage;
