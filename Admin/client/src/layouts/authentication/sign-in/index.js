import { useState } from "react";
import axios from "axios";
import { Card, Switch } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Toastify from "toastify-js";
import { setUserData } from "../../../Redux/slices/user-slice";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { BASEURL } from "../../../API.js";

function Basic() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${BASEURL}/user/login`, {
        username,
        password,
      });
      console.log(response.data);
      // console.log(response.data.token);
      // const token = response.data.token;
      dispatch(setUserData(response.data));

      setUserName("");
      setPassword("");
      Toastify({
        text: "Login Sucessfully",
        duration: 1800,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #3C50E0, #3C50E0",
          padding: "10px 50px",
        },
      }).showToast();
      navigate("/dashboard");

      // Optionally, redirect to another page after successful login
      // Example: history.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error, e.g., show an error message to the user
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="username"
                label="username"
                fullWidth
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
