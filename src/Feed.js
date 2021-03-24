import React, { useState, useEffect } from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox.js';
import Post from './Post.js';
import db from "./firebase";


function Feed() {
  //useState is a hook that prepares the variables
  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    db.collection('post')
  }, [])

  return (
    <div class="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <Tweetbox />

      {/* Post */}
       <Post displayName="Kevin Shrestha"
       username="kshrez"
       verified={true}
       text="YO YO YO WHAT'S POPPIN! This is working"
       avatar="https://media.giphy.com/media/lRLH2KwSgJDjjWbNXu/giphy.gif"
       image="https://media.giphy.com/media/lRLH2KwSgJDjjWbNXu/giphy.gif"
       />

      </div>
  )
}

export default Feed
