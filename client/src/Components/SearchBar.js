import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';

function SearchBar(props) {
  const { classes } = props;
  return (
    <>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            value={props.search}
            onChange={props.handleInputChange}
            placeholder="Your adventure..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            id="book"
          />
        </div>
        <Button type="submit" onClick={props.handleFormSubmit}>
          Search
        </Button>
      </Toolbar>
    </>
  );
}

export default withStyles(styles)(SearchBar);
