const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});


var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
const tablo = ["val1","val2",554]
var element = tablo[1]; 
console.log("element" , element); 

// app.get('/', (req, res) => {
//     res.send('Beautiful homepage');
//   });

app.get('/', (req, res) => {
    res.send('Authors API');
  });

  app.get("/authors/:id/" , (req , res) => { 
      let id = req.params.id ; 
      res.send(authors[id - 1].name)
      console.log("get /authors/:id/ id :",id) 
  
    // console.log(authors[id].name)
      })

//   app.get("/authors/2/", (req , res) => {
//       res.send("William Shakespeare , UK")
//   })

//   app.get("/authors/3/" , (req , res)=>{
//       res.send("Charles Dickens , US")
//   })

//   app.get("/authors/4/" , (req , res) =>{
//       res.send("Oscar Wilde , UK")
//   })




// EXERCICE 2

//   app.get("/authors/1/books/" , ( req , res) => {
//       res.send("Beowulf")
//   })

//   app.get("/authors/2/books/" , (req , res) =>{
//       res.send("Hamlet , Othello , Romeo & Juliette")
//   })
//   app.get("/authors/3/books/" , (req , res) =>{
//       res.send("Olivier Twist , A Chrismas Carol")
//   })
//   app.get("/authors/4/books/" , (req , res) =>{
//     res.send("The Picture of Dorian Gray, The Importance of Being Earnest")
// })