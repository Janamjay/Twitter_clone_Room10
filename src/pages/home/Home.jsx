import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    if (!loginSuccesss) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      
     
      <Sidebar/>
     
    </div>
  );
};

export default Home;
