const express = require('express');
const method4 = require('./abookdb.js');
const books = require('./booksdb.js');
const routerasync = express.Router();

routerasync.post('/all', async (res)=>{
    let book = await method4();
    return res.json({book});
});

routerasync.post('/:isbn', (req,res)=>{
    let isbn = decodeURIComponent(req.params.isbn);
    const isbnbook = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(books[isbn]);
        },0);
    })
    isbnbook.then(
        (data)=>res.json({data})
    )
});

routerasync.post('/auth/:author',async (req,res)=>{
    let author = decodeURIComponent(req.params.author);
    let data = await method4();
    let book = Object.values(data).filter(b => b.author.toLowerCase() === author.toLowerCase());
    return res.json({book});
});

routerasync.post('/title/:title',async (req,res)=>{
    let title = decodeURIComponent(req.params.title);
    let data = await method4();
    let book = Object.values(data).filter(b => b.title.toLowerCase() === title.toLowerCase());
    return res.json({book});
})

module.exports=routerasync;