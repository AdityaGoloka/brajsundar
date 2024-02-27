// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import BASEURL from "API";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [bookCount, setBookCount] = useState(0);
  const [reelCount, setReelCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);

  // useEffect(() => {
  //   const fetchBookData = async () => {
  //     try {
  //       const response = await axios.get(`${BASEURL}/book`);
  //       const data = response.data;
  //       console.log("Book Data: ", data);
  //       setBookCount(data.length);
  //     } catch (error) {
  //       console.log("Error Fetching Book Data: ", error);
  //     }
  //   };

  //   fetchBookData();
  // }, [bookCount]);

  // const fetchReelData = async () => {
  //   try {
  //     const response = await axios.get(`${BASEURL}/reels`);
  //     const data = response.data;
  //     console.log("Reel Data: ", data);
  //     setReelCount(data.length);
  //   } catch (error) {
  //     console.log("Error Fetching Reel Data: ", error);
  //   }
  // };

  // const fetchVideoData = async () => {
  //   try {
  //     const response = await axios.get(`${BASEURL}/video`);
  //     const data = response.data;
  //     console.log("Video Data: ", data);
  //     setVideoCount(data.length);
  //   } catch (error) {
  //     console.log("Error Fetching Video Data: ", error);
  //   }
  // };

  // const fetchArticleData = async () => {
  //   try {
  //     const response = await axios.get(`${BASEURL}/article`);
  //     const data = response.data;
  //     console.log("Article Data: ", data);
  //     setArticleCount(data.length);
  //   } catch (error) {
  //     console.log("Error Fetching Article Data: ", error);
  //   }
  // };

  return (
    <DashboardLayout>
      <div>
        <DashboardNavbar />
      </div>
      <div>
        <MDBox py={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="Books"
                  count={bookCount}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard icon="leaderboard" title="Reels" count={reelCount} />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="Videos"
                  count={videoCount}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="Articles"
                  count={articleCount}
                />
              </MDBox>
            </Grid>
          </Grid>
          {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
          {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
        </MDBox>
      </div>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
