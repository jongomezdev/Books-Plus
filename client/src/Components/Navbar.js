import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';
import { ThemeContext } from '../contexts/ThemeContext';
// import SearchBar from './SearchBar';

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <NavLink to="/">
              <span role="img" aria-label="books">
                📚
              </span>
            </NavLink>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            Books Plus
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <NavLink className={classes.link} to="/saved">
            Saved
          </NavLink>
          <NavLink className={classes.link} to="/">
            Search
          </NavLink>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={props.search}
              onChange={props.handleInputChange}
              placeholder="Here's to books..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              id="book"
            />
          </div>
          <button type="submit" onClick={props.handleFormSubmit}>
            Search
          </button> */}
          {/* <SearchBar /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
