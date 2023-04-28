import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Sidebar from "./Sidebar/Sidebar";
import TrendingSection from "./trendingsection/TrendingSection";
import Footer from '../../footer/Footer'


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
      <TrendingSection/>
      <Footer/>
    </div>
  );
};

export default Home;
