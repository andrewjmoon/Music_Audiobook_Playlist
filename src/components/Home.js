import React from 'react';
import app from '../base';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/electronics">Electronic Playlist</Link>
      <br />
      <Link to="/audiobooks">AudioBook Playlist</Link>
      <br />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
