// import express from 'express'

// import movies from "./routes/Movie.js"
// import dashboard from './routes/dashboard.js'

// const app = express()
// app.use("/dashboard", dashboard)
// app.use("/movies", movies)
// const PORT = 5001;



//  app.listen(PORT, ()=>{
//     console.log(`server listening to ${PORT}`);
    
// })

// import express from 'express'

// const app = express();

// app.use(express.json())
// // This route uses a PARAM called ":name"
// app.get("/welcome/:name", (req, res) => {
//   // Capture the name from the URL
//   const userName = req.params.name;

//   res.send(`<h1>Hello, ${userName}!</h1><p>Welcome to your dashboard.</p>`);
// });
// const PORT = 5001;
//  app.listen(PORT, ()=>{
//   console.log(`server listening to ${PORT}`);
    
//  })


import express from 'express'

const app = express();
app.use(express.json());

app.get("/shop/:category", (req, res) => {
  const category = req.params.category; // The main "shelf"
  const color = req.query.color;       // The optional "filter"

  if (color) {
    res.send(`You are looking at ${color} ${category}.`);
  } else {
    res.send(`You are looking at all ${category}.`);
  }
});

const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`server running at port: ${PORT}`);
    
})