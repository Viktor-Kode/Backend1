import express from 'express'

const route = express.Router()

route.get("/movie", (req, res )=>{
    res.json({
        name: "the blood pool",
        realse_date: "11/4/2024",
        time: "2hr"
    })
})

export default route