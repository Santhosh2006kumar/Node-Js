const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
  if(typeof username != undefined){
    return true;
  }else{
    return false;
  }
}

const authenticatedUser = (username, password) => {
  return users.some(user => user.username === username && user.password === password);
}
regd_users.post("/reg",(req,res)=>{
  let username = req.body.username;
  let password = req.body.password;
  if (isValid(username)){
    users.push({username,password});
    console.log(users);
    res.json({"message":`user ${username} registerd successfully!`});
  }else{
    res.json({"message":"ERROR"});
  }
})
//only registered users can login
regd_users.post("/login",(req,res) => {
  //Write your code here
  let username = req.body.username;
  let password = req.body.password;
  if(authenticatedUser(username,password)){
    let token = jwt.sign({username},'sskhere',{'expiresIn':'3h'});
    req.session.authorization={
        accesstoken:token,
        username : username
    }
    console.log(token);
    res.json({"message":"Login success!","token":`${token}`});
  }else{
    res.status(404).json({"message":"Register first!"});
  }
});

// Add a book review
// PUT: Add or update a book review for a user
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = decodeURIComponent(req.params.isbn);
  const review = req.body.review;
  

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Add or update the review
  books[isbn].reviews["rate"] = review;

  return res.json({ message: "Review updated successfully", book: books[isbn] });
});
regd_users.put('/auth/delreview/:isbn',(req,res)=>{
  let isbn = decodeURIComponent(req.params.isbn);
  if(!isbn){
    return res.status(404).json({message: "Book not found"});
  }
  books[isbn].reviews='';
  return res.json({message: "Review deleted successfully",book: books[isbn]});
});

  
module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
