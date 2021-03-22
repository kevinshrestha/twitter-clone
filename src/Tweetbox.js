import React from 'react'
import './Tweetbox.css'
import { Avatar, Button } from"@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
      <div className="tweetBox__input">
        <Avatar src=""></Avatar>
        <input placeholder="What is happening?" type="text"></input>
      </div>
      <input className="tweetBox__imageInput" placeholder="Optional: Enter image" type="text"></input>

      <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
