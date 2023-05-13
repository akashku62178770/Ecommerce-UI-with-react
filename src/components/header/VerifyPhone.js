// import React, { useEffect, useState } from "react";
// import registerotp from "../../assets/Registerotp.png";
// import "./Modal.css";
// import {
//   CircularProgress,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
// } from "@mui/material";
// import { NavLink, useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
// import RegisterOtp from "./RegisterOtp";

// const VerifyPhone = ( ) => {
//   const [phone, setPhone] = useState("");
//   const [server_error, setServerError] = useState({});

//   const navigate = useNavigate();
//   const [modal, setModal] = useState(false);
//   const [otpPopup, setOtpPopup] = useState("none");
//   const [isOpen, setIsOpen] = useState(false);

//   const openOtp = () => {
//     setIsOpen(true);
//   };
//   const closeOtp = () => {
//     setIsOpen(false);
//   };
//   const openModal = () => {
//     setModal(modal);
//   };
//   const closeModal = () => {
//     setModal(false);
//   };
//   const handlePhone = () => {
//     var btn = document.getElementById("#phoneVerify")
//     var phoneField = document.querySelector("#phoneField")
//     var otpField = document.querySelector("#otpField")

//     // btn.addEventListener("click", function() {
//     //   if (phoneField.style.display === "block") {
//     phoneField.style.display = "none" 
//     otpField.style.display = "block"
//     // }
//   // })
//     openOtp();
//     // setOtpPopup(true);
//     closeModal();

//     // toggleModal()
//     // toggleSubmit()
//     // fetch("http://api.awsugn.biz/send_otp/", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(phone),
//     // }).then((response) => {response.json()})
//     // .then(data => {
//     //     console.log(data)
//     // })
//     // .catch((error) => console.log("error", error));
//     // setModal(false);
//     // setOtpPopup(true);
//   };
//   const handleOtp = () => {};

//   if (modal) {
//     return (
//       <>
//         {/* <button
//           className="bg-darkBrown hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-brown transition text-lg "
//           // onClick={openVerifyPhone}
//           // onClick={console.log("register")}
//         >
//           Register
//         </button> */}
//         <Dialog
//           sx={{ mt: 3, mb: 2, px: 5 }}
//           open={openModal}
//           onClose={closeModal}
//           style={{ border: "round", background: "hidden" }}
//         >
//           <DialogContent
//             style={{
//               backgroundImage: `url(${registerotp})`,
//               backgroundSize: "cover",
//               backgroundColor: "blur",
//             }}
//           >
//             <DialogTitle
//               sx={{ mt: 3, mb: 2, px: 5 }}
//               style={{ color: "white", fontSize: 32 }}
//             >
//               Register
//             </DialogTitle>

//             {/* phone number field  */}
//             <div id="phoneField" style={{ display: "block" }}>
//               <Box
//                 component="form"
//                 noValidate
//                 sx={{ mt: 1 }}
//                 id="phone-form"
//                 onSubmit={handlePhone}
//               >
//                 <PhoneInput
//                   country={"et"}
//                   inputStyle={{
//                     borderColor: "brown",
//                     height: "3.5rem",
//                     width: "20rem",
//                     marginLeft: "0",
//                   }}
//                   onChange={(phone) => {
//                     setPhone(phone);
//                   }}
//                 />
//                 <Box textAlign="center">
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2, px: 5 }}
//                     style={{ backgroundColor: "#876156" }}
                    
//                     id="phoneVerify"
//                   >
//                     Verify
//                   </Button>
//                   {/* )} */}
//                 </Box>

//                 <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
//                 <Button style={{ color: "white" }} onClick={closeModal}>
//                   Cancel
//                 </Button>
//               </Box>
//             </div>
//             {/* Otp field */}
//             {/* <div className={`${isOpen ? "block" : "hidden"}`}> */}
//             <div id="otpField" style={{ display: "none" }}>
//               <Box
//                 component="form"
//                 noValidate
//                 sx={{ mt: 1 }}
//                 id="login-form"
//                 onSubmit={handleOtp}
//               >
//                 <TextField
//                   className="border-brown"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="otp"
//                   name="otp"
//                   type="otp"
//                   label="Type OTP code here..."
//                 />
//                 <Box textAlign="center">
//                   <div className="flex">
//                     <NavLink
//                       className="rounded text-bold"
//                       sx={{ mt: 3, mb: 2, px: 5 }}
//                       // style={{ backgroundColor: "#876156" }}
//                     >
//                       Resend
//                     </NavLink>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       sx={{ mt: 3, mb: 2, px: 5, mx: 5 }}
//                       style={{ backgroundColor: "#876156" }}
//                     >
//                       Login
//                     </Button>
//                   </div>
//                 </Box>
//               </Box>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </>
//     );
//   }

//   {
//     /* <div className="modal">
//         <div className="overlay">
//           <div className="modal-content">
//             <div
//               className="modal-box my-auto"
//               style={{
//                 width: "100%",
//                 backgroundImage: `url(${registerotp})`,
//                 backgroundSize: "cover",
//                 backgroundColor: "transparent",
//               }}
//             >
//               <h2 className="py-4"> Register </h2>
//               <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col justify-center items-center gap-2 my-auto"
//               >
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Phone Number"
//                   className="w-[20rem] border-brown outline-none border p-4 rounded-md "
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2, px: 5 }}
//                   style={{ backgroundColor: "#876156" }}
//                   onSubmit={toggleModal}
//                 >
//                   Login
//                 </Button>

//                 <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
//                 <Button style={{ color: "white" }} onClick={toggleModal}>
//                   Cancel
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div> */
//   }
// };

// export default VerifyPhone;
