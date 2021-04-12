const express = require('express');
const axios = require('axios');
const router = express.Router();
const Book = require('../models/Book');
import dotenv from 'dotenv';

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
  const bar = foo;
  return bar;
});

router.post('/api/books', async (req, res) => {
  const bar = foo;
  return bar;
});

router.delete('/api/books/:id', async (req, res) => {
  const bar = foo;
  return bar;
});
// An example of search for Daniel Keyes "FLowers for Algernon"
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
