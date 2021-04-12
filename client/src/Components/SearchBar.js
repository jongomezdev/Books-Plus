import React from 'react';
import { Input, Button, AppBar } from '@material-ui/core';

function SearchBar(props) {
  return (
    <>
      <AppBar>
        <form>
          <label htmlFor="book">Search a book:</label>
          <Input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            placeholder="Here's to books, the cheapest vacation you can buy."
            id="book"
          />
        </form>
      </AppBar>
    </>
  );
}
