/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useSelector } from "react-redux";
import axios from "axios";
import { Card, Spin, Alert, Typography } from "antd";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
const { Title, Text } = Typography;
import "./index.css";
function Overview() {
  const state = useSelector((state) => state);
  console.log(state); // Log the entire Redux store state
  console.log(state.user); // Log the entire Redux store state
  console.log(state.user.userData); // Log the entire Redux store state
  console.log(state.user.userData.userId); // Log the entire Redux store state
  const userId = useSelector((state) => state.user.userData.userId);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(userId);
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/user/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <div className="profile-container">
        <Title level={2} className="profile-title">
          Profile Page
        </Title>
        {userData && (
          <Card className="profile-card" title="User Information">
            <Text className="label" strong>
              Name:
            </Text>
            <Text>{userData.name}</Text>
            <Text className="label" strong>
              Email:
            </Text>
            <Text>{userData.email}</Text>
            <Text className="label" strong>
              Created At:
            </Text>
            <Text>{new Date(userData.createdAt).toLocaleString()}</Text>
            <Text className="label" strong>
              Updated At:
            </Text>
            <Text>{new Date(userData.updatedAt).toLocaleString()}</Text>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Overview;
