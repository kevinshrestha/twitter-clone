import React from 'react';
import './Widgets.css';
import SearchIcon from "@material-ui/icons/Search"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kshrez"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/kevin.shrestha.9/"}
          options={{ text: "#reactjs is awesome", via: ""}}
        />
      </div>
    </div>
  )
}

export default Widget;
