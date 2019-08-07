import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
            <li>
              <Link to="/electronics">Electronic Playlist</Link>
            </li>
            <li>
              <Link to="/audiobooks">AudioBook Playlist</Link>
            </li>
            <li>
              <Link to="/audiobookplayer">AudioBook Player</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/playlist">Music PlayList</Link>
            </li>
            <li>
              <Link to="/audiobookplaylist">Audio PlayList</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    );
  }
}
