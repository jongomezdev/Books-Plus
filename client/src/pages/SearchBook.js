import React, { Component } from 'react';
import API from '../utils/API';

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ search: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ message: '' });
    this.searchGoogle(this.state.search);
  };
  searchGoogle = (query) => {
    API.googleSearch(query).then((res) => {
      let results = res.data.items;
      const booksArray = results.map((obj) => {
        const {
          title,
          authors,
          description,
          previewLink,
          imageLinks,
        } = obj.volumeInfo;
        const thumbnail = imageLinks ? imageLinks.thumbnail : 'unavailable';
        return {
          image: thumbnail,
          title,
          authors,
          description,
          link: previewLink,
        };
      });
      this.setState({
        books: booksArray,
      });
    });
  };
  handleSaveBtn = (event) => {
    event.preventDefault();
    const image = this.state.books[0].image;
    const title = this.state.books[0].title;
    const authors = this.state.books[0].authors;
    const link = this.state.books[0].link;

    if (this.state.books) {
      API.saveBook({
        image: image,
        title: title,
        authors: authors[0],
        link: link,
      })
        .then((res) => console.log(res.title + ' was added to your favorites'))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return <div></div>;
  }
}

export default SearchBook;
