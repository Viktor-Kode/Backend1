const errorHandler = (err, req, res, next)=>{
    console.error("error:", err.message);
    
    if (err.code === 11000) {
        return res.status(409).json({
            message:"email has already been used"
        })
    }
    res.status(err.code || 500).json({
        status:"error",
        message: err.message || "internal server error"

    })
}
export default errorHandler