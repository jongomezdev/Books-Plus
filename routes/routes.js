const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();
const Book = require('../models/book');
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

router.get('/api/search/:terms', async (req, res) => {
  try {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const searchQuery = req.params.terms.replace(' ', '+');
    const URL =
      baseURL +
      searchQuery +
      '&maxResults=20&printType=books&key=' +
      process.env.GOOGLE_API_KEY;
    const results = await axios.get(URL);
    res.json(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/books', async (req, res) => {
  try {
    const book = await Book.create(req.bdy);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});
// An example of search for Daniel Keyes "FLowers for Algernon"
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
