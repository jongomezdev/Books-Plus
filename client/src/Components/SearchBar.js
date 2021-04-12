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
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';

function SearchBar(props) {
  const { classes } = props;
  return (
    <>
      <AppBar>
        <div className={classes.search}>
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
        </button>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(SearchBar);
