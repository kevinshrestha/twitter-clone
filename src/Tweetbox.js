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
        {/* <input placeholder="etner image URL" type=""></input> */}
      </div>
      <Button>Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
