import React from 'react'
import './Tweetbox.css'
import { Avatar, Button } from"@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
      <div className="tweetBox__input">
        <Avatar src=""></Avatar>
        <input placeholder="What is up?" type="text"></input>
        <input className="tweetBox__imageInput" placeholder="Optional: Enter image" type="text"></input>
      </div>
      <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
