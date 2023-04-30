import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import Textarea from "@mui/joy/Textarea";
import styles from "./Tweet.module.css";

export default function Tweet() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweets, setTweets] = useState([]);

  function handleTweet() {
    if (tweetMessage.trim() !== "") {
      // only add the tweet if it's not empty
      setTweets([...tweets, tweetMessage]); // add the new tweet to the list of tweets
      setTweetMessage(""); // clear the tweet message input field
    }
  }

  return (
    <div className={styles.tweetBox}>
      <div className={styles.tweetInput}>
        <div className={styles.avatar}>
          <Avatar
            alt="Sourav Ganguly"
            src="https://gumlet.assettype.com/barandbench%2F2021-07%2F3e25a27f-d4e1-4f11-a28f-ebfb9e04c84c%2Fsourav.jpg?auto=format%2Ccompress&fit=max&w=1200"
            size="md"
          />
        </div>

        <Textarea
          minRows={3}
          className={styles.inputField}
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"
          sx={{
            border: "none",
            outline: "none",
          }}
        />
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          <PermMediaOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <GifBoxOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <PollOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <InsertEmoticonOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <EditCalendarOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <AddLocationAltOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
        </div>

        <Button
          className={styles.tweetButton}
          variant="contained"
          size="small"
          onClick={handleTweet}
          sx={{
            borderRadius: "50px",
            marginTop: "0",
            "&:hover": {
              backgroundColor: "#0c8bf2",
            },
          }}
        >
          Tweet
        </Button>
      </div>

      <div className={styles.tweetsContainer}>
        {tweets.map((tweet, index) => (
          <div key={index} className={styles.tweet}>
            <div className={styles.tweetAvatar}>
              <Avatar
                alt="Sourav Ganguly"
                src="https://gumlet.assettype.com/barandbench%2F2021-07%2F3e25a27f-d4e1-4f11-a28f-ebfb9e04c84c%2Fsourav.jpg?auto=format%2Ccompress&fit=max&w=1200"
                size="md"
              />
            </div>
            <div className={styles.tweetContent}>
              <div className={styles.tweetHeader}>
                <h3 className={styles.tweetUsername}>Sourav Ganguly</h3>
                <p className={styles.tweetTime}>3h</p>
              </div>
              <div className={styles.tweetBody}>
                <p>{tweet}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
