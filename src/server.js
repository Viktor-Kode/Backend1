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


// import express from 'express'

// const app = express();
// app.use(express.json());

// app.get("/shop/:category", (req, res) => {
//   const category = req.params.category; // The main "shelf"
//   const color = req.query.color;       // The optional "filter"
//   if (color) {
//     res.send(`You are looking at ${color} ${category}.`);
//   } else {
//     res.send(`You are looking at all ${category}.`);
//   }
// });

// const PORT = 5001;
// app.listen(PORT, ()=>{
//     console.log(`server running at port: ${PORT}`);
    
// })

// app.use(express.json());

// app.post('/join-gym', (req, res) => {
//   const name = req.body.name;
//   const goal = req.body.goal;

//   // Use res.json to send the data back to Thunder Client
//   res.json({
//     message: `Welcome viktor`,
//     pl: `We will help you marathon`
//   });
// });an



// import express from 'express'
// const app = express();


// app.use(express.json());

// // app.get('/books/:category', (req,res)=>{
// //   const cat= req.params.category
// //   const page = req.query.page


// //   res.send(`<h1>you are reading a book about ${cat}, you are at page ${page}.</h1>`)
// // })
// const PORT = 5001;
// app.listen(PORT,()=>{
//   console.log(`testing port at${PORT}`);
  
// })
// import login from './routes/login.js';
// const app = express();
// app.use(express.json())
//  app.use('/', login)

// import express from 'express'
// import route from './routes/userRoutes.js';

// const app = express();
// app.use(express.json());

// app.use('/user', route)


// const PORT = 5001;
// app.listen(PORT,()=>{
//   console.log(`testing port at ${PORT}`)
// })


import express from "express";
import route from './routes/userRoutes.js'
import mongoose from "mongoose";
import errorHandler from ".././middleware/errorHandler.js"
import dotenv from "dotenv";
const app = express();
app.use(express.json())
dotenv.config();
app.use('/user', route )
const Mongo_URI = "mongodb+srv://victorand804_db_user:%j$qY5S26H3Bf$h@cluster0.lf0rolp.mongodb.net/JWT_Practice?retryWrites=true&w=majority";

mongoose.connect(Mongo_URI).then(()=>{
  console.log('✅ Database is holding hands with the Server');
  
}).catch((err)=>{
  console.error("❌ Database connection failed:", err.message);
  
})


const PORT = 5001;
app.use(errorHandler)
app.listen(PORT, ()=>{
  console.log(`we live at port ${PORT}`);
  
})


