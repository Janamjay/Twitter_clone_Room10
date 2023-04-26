import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logo from "../images/logo.png";
import log from "./login.module.css";
import { Button, TextField } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    setUserList(data);
  }, []);

  function handleLogin() {
    if (email === "" || password === "") {
      swal("Alert", "Please Fill the required Input Field!", "warning");
    } else if (userList !== null) {
      const userFind = userList.find(
        (x) =>
          (x.email === email || x.email === "") &&
          (x.password === password || x.password === "")
      );
      if (!userFind) {
        swal("Alert", "No user found. Please sign up!!", "warning");
        setEmail("");
        setPassword("");
      } else {
        swal("Great Job !!", "You are Successfully Login!!", "success");
        nav("/");
      }
    } else {
      swal("Alert", "Please SignUp First!!", "warning");
    }

    localStorage.setItem("login-success", "true");
    navigate("/");
  }
  return (
    <div className={log.main_container}>
      <div className={log.inner_container}>
        <div className={log.image}>
          <img src={logo} alt="logoimage" />
        </div>
        <div className={log.content}>
          <h1>Sign in to Twitter</h1>
          <div className={log.input}>
            <TextField
              id="outlined-basic-email"
              value={email}
              label="Email"
              type="email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
              sx={{
                display: "block",
                margin: "2rem 0",
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
                backgroundColor: "grey",
                outline: "none",
                border: "none",
                margin:"2rem 0",                
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
