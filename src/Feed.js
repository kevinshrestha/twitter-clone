import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import db from "./firebase";
import FlipMove from 'react-flip-move';


function Feed() {
  //useState is a hook that prepares the variables
  const [posts, setPosts] = useState([]);

  //Runs after first Render and after every update
  //Snapshot grabs the state of the database and shows on the browser what current data is posted
  //Collection is from Firebase. Doc is the data from the Collection. Data gets all data points from the doc.
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
          key={post.text} 
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
        ))}
      </FlipMove>
      </div>
  );
}

export default Feed
