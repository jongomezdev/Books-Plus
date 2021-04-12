import React, { Component } from 'react';
import { Image, BookDetails } from '../Components/SearchResults';
import {
  Container,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import API from '../utils/API';

class SavedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ borderBottom: 'none' }}>
                Saved Books:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.books.map((book, i) => (
              <TableRow key={i}>
                <Image image={book.image} />
                <BookDetails
                  title={book.title}
                  description={book.description}
                  link={book.link}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  }
}

export default SavedBooks;
