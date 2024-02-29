import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from "./layouts/authentication/sign-in";
import Tables from "layouts/tables";
import Books from "layouts/books";
import Reels from "layouts/reels";
import Videos from "layouts/videos";
import Reviews from "layouts/reviews";
import Articles from "layouts/articles";
import Profile from "layouts/profile";
import PropTypes from "prop-types"; // Import PropTypes

import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "routes";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import { useSelector } from "react-redux";
import Dashboard from "layouts/dashboard";
import SignUp from "./layouts/authentication/sign-up";

export default function App() {
  const navigate = useNavigate();
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  const currentUser = useSelector((state) => state.user.userToken);
  const RequirePath = ({ children }) => {
    return currentUser === null ? <Navigate to="/auth/signin" /> : children;
  };

  // Add prop types validation
  RequirePath.propTypes = {
    children: PropTypes.node, // Validate that children is a React node
  };

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enters mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leaves mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  // useEffect(() => {
  //   document.body.setAttribute("dir", direction);
  // }, [direction]);

  // Setting page scroll to 0 when changing the route
  // useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  // }, [pathname]);

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/dashboard");
  //   }
  // }, [currentUser, navigate]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {currentUser && (
        <Sidenav
          color={sidenavColor}
          brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
          brandName="BrajSundar Dashboard"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      )}

      {/* <RequirePath> */}
      <Routes>
        <Route index path="auth/signin" element={<SignIn />} />
        <Route index path="auth/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <RequirePath>
              <Dashboard />
            </RequirePath>
          }
        />
        <Route
          index
          path="tables"
          element={
            // <RequirePath>
            <Books />
            // </RequirePath>
          }
        />
        <Route index path="reel" element={<Reels />} />
        <Route index path="video" element={<Videos />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="articles" element={<Articles />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      {/* </RequirePath> */}
      {configsButton}
    </ThemeProvider>
  );
}
