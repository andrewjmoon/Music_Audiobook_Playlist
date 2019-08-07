import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { NavDrawer } from './NavDrawer';

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 20
  },
  title: {
    flexGrow: 3
  }
};

class NavBar extends React.Component {
  state = {
    drawerOpened: false
  };

  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="initial" className={classes.title}>
              <Link className="Link" to="/">
                <p>Home</p>
              </Link>
            </Typography>
            <Typography variant="h6" color="initial" className={classes.title}>
              <Link className="Link" to="/login">
                <p>Login</p>
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.title}>
              <Link className="Link" to="/signup">
                <p>Signup</p>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>

        <NavDrawer
          drawerOpened={this.state.drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

/*
An example of a menu:
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 4
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Audio Shack
          </Typography>
          <Typography variant="h6" color="initial" className={classes.title}>
            <Link className="Link" to="/">
              <p>Home</p>
            </Link>
          </Typography>
          <Typography variant="h6" color="initial" className={classes.title}>
            <Link className="Link" to="/login">
              <p>Login</p>
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link className="Link" to="/signup">
              <p>Signup</p>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
*/
