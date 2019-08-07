import React from 'react';
import './App.css';
import PlayList from './components/MusicPlayList';
import AudioPlayList from './components/AudioPlayList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AuthProvider } from './Auth';
import PrivateRoute from './components/PrivateRouter';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Electronics from './components/Electronics';
import AudioBooks from './components/AudioBooks';
import AudioBookPlayer from './components/AudioBookPlayer';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/electronics" component={Electronics} />
          <PrivateRoute exact path="/audiobooks" component={AudioBooks} />
          <PrivateRoute exact path="/audiobookplayer" component={AudioBookPlayer} />
          <PrivateRoute exact path="/playlist" component={PlayList} />
          <PrivateRoute exact path="/audiobookplaylist" component={AudioPlayList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
