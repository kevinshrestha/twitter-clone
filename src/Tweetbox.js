import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from"@material-ui/core";
import db from "./firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  //Stop refresh
  const sendTweet = (e) => {
    e.preventDefault();  

    db.collection("posts").add({
      displayName: 'Kevin Shrestha',
      username: 'KShreZ',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://lh3.googleusercontent.com/ogw/ADGmqu_4-sRs0XDOt2l0H_4wycjwa8h5OGJKHtGsSGLIhw=s83-c-mo",
    });

    //Post resets to clear message
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
      <div className="tweetBox__input">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_4-sRs0XDOt2l0H_4wycjwa8h5OGJKHtGsSGLIhw=s83-c-mo"></Avatar>
        <input 
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="what's happening?"
          type="text"
        />
      </div>
      <input
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className="tweetBox__imageInput" 
        placeholder="Optional: Enter image" 
        type="text" 
      />

      <Button 
        onClick={sendTweet} 
        type="submit" 
        className="tweetBox__tweetButton">
          Tweet
      </Button>
      </form>
    </div>
  );
}

export default Tweetbox
