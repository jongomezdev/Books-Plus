import React from 'react';
import { TableCell, Button } from '@material-ui/core';

export function Image(props) {
  return (
    <TableCell>
      <img alt={props.title} src={props.image} />
    </TableCell>
  );
}

export function BookDetails(props) {
  return (
    <TableCell>
      <h3>{props.title}</h3>
      <p> {props.description}</p>
      <a href={props.link}>Click to view book</a>
    </TableCell>
  );
}

export function SaveFavorites(props) {
  return (
    <TableCell>
      <Button onClick={props.handleSaveBtn}>Save this book!</Button>
    </TableCell>
  );
}
