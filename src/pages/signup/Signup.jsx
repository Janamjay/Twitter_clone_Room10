import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logo from "../images/logo.png";
import sign from "./signup.module.css";
import { Button, TextField } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setLocalStorageData(JSON.parse(data));
    }
  }, []);

  function handleSignUp() {
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };

    if (email.includes("@") && password.length >= 8) {
      setLocalStorageData((prevData) => [...prevData, userInfo]);
      console.log(localStorageData);

      if (
        localStorageData.find(
          (user) => user.name === name && user.email === email
        )
      ) {
        return swal(
          "user Exiting",
          "Please enter another Email and Password!",
          "warning"
        );
      }

      localStorage.setItem(
        "userData",
        JSON.stringify([...localStorageData, userInfo])
      );
      swal("Good job!", "You Successfully Registered!", "success");
      navigate("/login");
    } else {
      swal("Ops", "Please enter valid details", "error");
    }
    setName("");
    setEmail("");
    setPassword("");
  }

  return (

    <div className={sign.main_container}>
      <div className={sign.inner_container}>
        <div className={sign.image}>
          <img src={logo} alt="logoimage" />
        </div>
        <div className={sign.content}>
          <h1>Join Twitter today</h1>
          <div className={sign.input}>

            <TextField
              id="outlined-basic-name"
              value={name}
              label="Name"
              variant="outlined"
              type="text"
              onChange={(event) => setName(event.target.value)}
              sx={{
                display: "block",
                margin: "1rem 0",
                marginBottom:"0px"
              }}
            />

            <TextField
              id="outlined-basic-email"
              value={email}
              label="Email"
              type="email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
              sx={{
                display: "block",
                marginTop:"0",
                margin: "1rem 0",
              }}
            />

            <TextField
              id="outlined-basic-password"
              value={password}
              type="password"
              label="Password"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
              sx={{
                display: "block",
              }}
            />

            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "black",
                outline: "none",
                border: "none",
                margin: "1rem 0",
                width:"30%",
                textTransform:"none",
                "&:hover": {
                  backgroundColor:"black",
                },
              }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
