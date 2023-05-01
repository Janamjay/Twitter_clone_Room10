import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dialog, DialogContent, Popover } from "@mui/material";
import Tweet from "../Tweet/Tweet";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showTweetBox, setShowTweetBox] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleNavigate(path) {
    navigate(path);
  }

  function handleTweetClick() {
    setShowTweetBox(true); // show the Tweet component
  }

  function handleLogout() {
    localStorage.removeItem("login-success");
    navigate("/login");
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
            <p onClick={() => handleNavigate("/")}>
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

            <p onClick={() => handleNavigate("/explore")}>
              <span>
                <TagIcon />
              </span>
              Explore
            </p>

            <p onClick={() => handleNavigate("/notifications")}>
              <span>
                <NotificationsNoneIcon />
              </span>
              Notifications
            </p>
            <p onClick={() => handleNavigate("/messages")}>
              <span>
                <MailOutlineIcon />
              </span>
              Messages
            </p>

            <p onClick={() => handleNavigate("/bookmarks")}>
              <span>
                <BookmarkBorderIcon />
              </span>
              Bookmarks
            </p>

            <p onClick={() => handleNavigate("/twitterblue")}>
              <span>
                <TwitterIcon />
              </span>
              Twitter blue
            </p>

            <p onClick={() => handleNavigate("/profiles")}>
              <span>
                <PermIdentityIcon />
              </span>
              profile
            </p>

            <p onClick={() => handleNavigate("/more")}>
              <span>
                <MoreHorizIcon />
              </span>
              More
            </p>
          </div>

          <Button
            className={styles.sidear_button}
            onClick={handleTweetClick}
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

          <Dialog open={showTweetBox} onClose={() => setShowTweetBox(false)}>
            <DialogContent
              sx={{
                height: "300px",
                width: "500px",
              }}
            >
              <Tweet />
            </DialogContent>
          </Dialog>

          <Button
            className={styles.sidebar__lastButton}
            onClick={(e) => setAnchorEl(e.currentTarget)}
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              backgroundColor: "transperent",
              color: "#8899a6",
              fontSize: "1rem" /* 16px */,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "1.875rem" /* 30px */,
              height: "3.125rem" /* 50px */,
              paddingLeft: "2rem",
              marginTop: "3rem",
            }}
          >
            <AccountCircleIcon
              sx={{
                marginRight: "1rem",
                fontSize: "1rem",
              }}
            />
            <span>users</span>
            <span>
              <MoreHorizIcon />
            </span>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Button onClick={() => handleLogout()}>Logout</Button>
            </Popover>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;