import express from 'express'

const dashboard = express.Router()

dashboard.get("/dashboard", (req, res)=>{
   res.json({
    name: "viktor", 
        movie_watched: 20,
        time_used: 400,
        email:"victorand@gmail.com"
   })
})

export default dashboard;