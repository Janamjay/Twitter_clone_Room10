import React from "react";
import styles from "./Sidebar.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import {  useNavigate } from "react-router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';






const Sidebar = () => {


 
  
  

const navigate=useNavigate()
function handleNavigate(path){
   navigate(path)
}

  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.sidebar__twitterIcons}>
          <TwitterIcon
            className={styles.sidebar_twittericon}
            sx={{
              color: "#51b6f5 ",
              marginLeft: "0rem",
              fontSize: "2.1875rem",
              justifyContent: "center",
            }}
          />

          <div className={styles.icons}>

            <p onClick={()=>handleNavigate("/")}>

              <span>
                <HomeIcon
                  sx={{
                    direction: "row",
                    alignItems: "center",
                    corsor: "pointer",
                  }}
                />
              </span>
              Home
            </p>


            <p onClick={()=>handleNavigate("/explore")}>

              <span>
                <TagIcon />
              </span>
              Explore
            </p>


            <p onClick={()=>handleNavigate("/notifications")}>

              <span>
                <NotificationsNoneIcon />
              </span>
              Notifications
            </p>


            <p onClick={()=>handleNavigate("/messages")}>
              <span>
                <MailOutlineIcon />
              </span>
              Messages
            </p>

            <p onClick={()=>handleNavigate("/bookmarks")}>

              <span>
                <BookmarkBorderIcon />
              </span>
              Bookmarks
            </p>


            <p onClick={()=>handleNavigate("/twitterblue")}>
              <span>
                <TwitterIcon />
              </span>
              Twitter blue
            </p>

            <p onClick={()=>handleNavigate("/profiles")}>

              <span>
                <PermIdentityIcon />
              </span>
              profiles
            </p>


            <p onClick={()=>handleNavigate("/more")}>

        

              <span>
                <MoreHorizIcon />
              </span>
              More
            </p>
          </div>

          <Button
            className={styles.sidear_button}
          
            sx={{
              backgroundColor: "#51b6f5",
              color: "white",
              border: "none",
              fontWeight: "900",
              textTransform: "inherit",
              borderRadius: "1.875rem" /*30px*/,
              height: "3.125rem" /*50px*/,
              width: "100%",
              paddingLeft: "1.25rem" /*20px */,
              "&:hover": {
                backgroundColor: "#51b6f5",
                color: "white",
              },
            }}
          >
            Tweet
          </Button>

          <Button
            className={styles.sidebar__lastButton}
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent:"left",
              backgroundColor: "transperent",
              color: "#8899a6",
              fontSize: "1rem" /* 16px */,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "1.875rem" /* 30px */,
              height: "3.125rem" /* 50px */,
              // width: "110%",
              paddingLeft: "2rem" /* 32px */,

              marginTop: "3rem",

            }}
          >
            <AccountCircleIcon
              sx={{
                marginRight: "1rem",
                fontSize: "1.25rem" /* 24px */,
               
              }}
            />

            username

          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
