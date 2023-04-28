import React from "react";
import styles from "./Sidebar.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.sidebar__twitterIcons}>
          <TwitterIcon
            className={styles.sidebar_twittericon}
            sx={{
              color: "#51b6f5 ",
              marginLeft: "2rem",
              fontSize: "2.1875rem",
              justifyContent: "center",
            }}
          />

          <div className={styles.icons}>
            <p>
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

            <p>
              <span>
                <TagIcon />
              </span>
              Explore
            </p>

            <p>
              <span>
                <NotificationsNoneIcon />
              </span>
              Notifications
            </p>

            <p>
              <span>
                <MailOutlineIcon />
              </span>
              messages
            </p>

            <p>
              <span>
                <BookmarkBorderIcon />
              </span>
              Bookmarks
            </p>

            <p>
              <span>
                <ListAltIcon />
              </span>
              Lists
            </p>

            <p>
              <span>
                <PermIdentityIcon />
              </span>
              profiles
            </p>

            <p>
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
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "transparent",
              color: "#8899a6",
              fontSize: "1rem" /* 16px */,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "1.875rem" /* 30px */,
              height: "3.125rem" /* 50px */,
              width: "100%",
              paddingLeft: "2rem" /* 32px */,
              marginTop: "1rem",
            }}
          >
            <PermIdentityIcon
              sx={{
                marginRight: "1rem",
                fontSize: "1.5rem" /* 24px */,
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
