// import React from 'react';
// import { Input, Button, AppBar } from '@material-ui/core';

// export default function SearchBar(props) {
//   return (
//     <>
//       <AppBar style={{ marginTop: 222, padding: 20 }}>
//         <form>
//           <label htmlFor="book">Search a book:</label>
//           <Input
//             value={props.search}
//             onChange={props.handleInputChange}
//             type="text"
//             placeholder="Here's to books, the cheapest vacation you can buy."
//             id="book"
//           />
//           <Button type="submit" onClick={props.handleFormSubmit}>
//             Search
//           </Button>
//         </form>
//       </AppBar>
//     </>
//   );
// }
import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
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
      {/* <AppBar> */}
      <Toolbar style={{ backGround: 'purple' }}>
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
      {/* </AppBar> */}
    </>
  );
}

export default withStyles(styles)(SearchBar);
