import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink, useNavigate } from "react-router-dom";
import signin from "../../assets/Signin.png";
import { useDispatch } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { useLoginUserMutation } from "../../services/userAuthApi";
import {
  storeToken,
  getToken,
  removeToken,
} from "../../services/LocalStorageService";
import { setUserToken } from "../../features/authSlice";
import Register from "./Register";
 
const SigninPopup = ({ handleOpen , handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"), // name of the field
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    if (res.error) {
      console.log("error1", res.error.data);
      // console.log("error2", res.error.data.errors);
      setServerError(res.error.data);
    }
    if (res.data) {
      // console.log(typeof res.data);
      console.log(res.data);
      console.log("token:", res.data);
      storeToken(res.data);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      navigate("/");
    }
  };

  let {access_token} = getToken()
useEffect(() => {
  dispatch(setUserToken({ access_token: access_token }))

}, [access_token, dispatch])
  
// const handleOpen = () => {}
// const handleClose = () => {
  
// }

  return (
    
    <Dialog  open={handleOpen } onClose={handleClose}  
    style={{border: "round"}}
   >
    
    
      
      <DialogContent style={{
      backgroundImage: `url(${signin})`,
      backgroundSize: "cover",
      backgroundColor: "transparent",
    }} >
      <DialogTitle>Sign In</DialogTitle>
        {/* <DialogContentText>This is the content of the popup.</DialogContentText> */}
        <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}

      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          name="username"
          label="Username"
        />
        {server_error.username ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.username[0]}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
        />
        {server_error.password ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.password[0]}
          </Typography>
        ) : (
          ""
        )}
         <Box textAlign="center">
          {/*{isLoading ? (
            <CircularProgress />
          ) : ( */}
            <Button
              type="submit"
              variant="contained"
              
              sx={{ mt: 3, mb: 2, px: 5 }}
              style={{backgroundColor: "#876156"}}
              onSubmit={handleClose}
            >
              Login
            </Button>
          {/* )} */}
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
        <Button style={{color: "white"}} onClick={handleClose}>Cancel</Button >
        {/* {error.status ? <Alert severity={error.type}> {error.msg}</Alert> : ""} */}
        {server_error.detail ? (
          <Alert severity="error">{server_error.detail}</Alert>
        ) : (
          ""
        )}
      </Box>
      {/* <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions> */}
      </DialogContent>
    
     
    </Dialog>
  
  );
};

export default SigninPopup;

//   const [server_error, setServerError] = useState({});
//   const navigate = useNavigate();
//   const [loginUser, { isLoading }] = useLoginUserMutation();
//   const dispatch = useDispatch();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       email: data.get("email"), // name of the field
//       password: data.get("password"),
//     };
//     const res = await loginUser(actualData);
//     if (res.error) {
//       setServerError(res.error.data.errors);
//     }
//     if (res.data) {
//       // console.log(typeof res.data);
//       console.log(res.data);
//       storeToken(res.data.token);
//       let { access_token } = getToken();
//       dispatch(setUserToken({ access_token: access_token }));
//       navigate("/dashboard");
//     }
//   };
//   let {access_token} = getToken()
// useEffect(() => {
//   dispatch(setUserToken({ access_token: access_token }))

// }, [access_token, dispatch])

//   return (
//     <>
//       {/* {server_error.non_field_errors
//         ? console.log(server_error.non_field_errors[0])
//         : ""}
//       {server_error.email ? console.log(server_error.email[0]) : ""}
//       {server_error.password ? console.log(server_error.password[0]) : ""} */}
//       <Box
//         component="form"
//         noValidate
//         sx={{ mt: 1 }}
//         id="login-form"
//         onSubmit={handleSubmit}
//       >
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           name="email"
//           label="Email Address"
//         />
//         {server_error.email ? (
//           <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
//             {server_error.email[0]}
//           </Typography>
//         ) : (
//           ""
//         )}
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="password"
//           name="password"
//           type="password"
//           label="Password"
//         />
//         {server_error.password ? (
//           <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
//             {server_error.password[0]}
//           </Typography>
//         ) : (
//           ""
//         )}
//         <Box textAlign="center">
//           {isLoading ? (
//             <CircularProgress />
//           ) : (
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ mt: 3, mb: 2, px: 5 }}
//             >
//               Login
//             </Button>
//           )}
//         </Box>
//         <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
//         {/* {error.status ? <Alert severity={error.type}> {error.msg}</Alert> : ""} */}
//         {server_error.non_field_errors ? (
//           <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
//         ) : (
//           ""
//         )}
//       </Box>
//     </>
//   );
// };

// export default UserLogin;