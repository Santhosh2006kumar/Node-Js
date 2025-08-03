const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.json(books);
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = decodeURIComponent(req.params.isbn);
  console.log(isbn);
  let book_d = books[isbn];
  console.log(book_d);
  res.json(book_d);
  return res.status(300).json({message: "Yet to be implemented"});
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  let author = decodeURIComponent(req.params.author);
  let abook = Object.values(books).filter(b => b.author.toLowerCase() === author.toLowerCase());
  res.json(abook);
  if (!abook){
    return res.status(300).json({message: "Yet to be implemented"});
  }

  
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let title = req.params.title;
  let tbook = Object.values(books).filter(b => b.title.toLowerCase()=== title.toLowerCase());
  res.json(tbook);
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn;
  let rbook = books[isbn].reviews;
  res.json(rbook);
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
