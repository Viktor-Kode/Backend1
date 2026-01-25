// export const getUsers = (req, res)=>{
//     res.json({
//         message: "You are seeing all the gym members!"
//     })
// }

// export const CreatUser = (req, res)=>{
//     res.json({
//         message:`user has been added to the database.`
//     })
// }

// export const updateUser = (req, res)=>{
//     const id = req.params.id
//         res.json({
//             message:`user-${id} has been succefully updated`
//         })
// }

// export const deleteUser = (req, res)=>{
//         const id = req.params.id
//     res.json({
//         message:`user-${id} has been  deleted`
//     })
// }


// export const getUsers = (req, res)=>{
//     res.json({
//         message: "all users of the gym"
//     })
// }

// export const createUser = (req, res)=>{
//       res.json({
//         message: "yayy! you just joined the gym"
//     })
// }
// export const editUser = (req, res)=>{
//     const id = req.params.id
//       res.json({
//         message: `user-${id} has been editted`
//     })
// }

// export const removeUser =(req, res)=>{
//         const id = req.params.id
//       res.json({
//         message: `user-${id} has been deleted`
//     })
// };

// let books = [
//   { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { id: "2", title: "1984", author: "George Orwell" },
//   { id: "3", title: "The Hobbit", author: "J.R.R. Tolkien" }
// ];

// export const getBooks = (req, res) => {
//   res.json(books);
// };

// export const getBookById =(req, res)=>{
//   const { id }= req.params
//   const book = books.find(b=> b.id === id)
//   if (book){
//     res.json(book)
//   }else{
//     return res.status(404).json({
//       message: "book not found"
//     })
//   }
  
// }

// export const addNewBook = (req,res)=>{
//   const {title, author}= req.body;

//   const newBook = {
//       id: Date.now().toString(),
//       title: title,
//       author: author,
//   }

//   books.push(newBook);
//   res.json(books)


// }

// export const delbook = (req, res) => {
//   const { id } = req.params;

//   // We use .filter to create a NEW version of the array 
//   // that only includes books where the ID DOES NOT match
//   books = books.filter(b => b.id !== id);

//   // 204 means "No Content" - the best status for a successful delete
//   res.status(204).send();
// };

// export const updateBook = (req, res)=>{
//   const {id}= req.params
//   const {title, author}= req.body

//   const book = books.find(b=> b.id === id)

//   if(title){
//     book.title = title
    
//   }
//   if(author){
//     book.author = author
//   }

//   res.json(book)
// }

// import User from ".././models/Book.js"
// import bcrypt from "bcrypt"



// export const create = async (req, res)=>{
//   try{
//     const userData= new user(req.body);

//     const saveData = await userData.save()

//     res.status(201).json(saveData)
//   }catch (err){
//       res.status(400).json({
//         message: err.message
//       })
//   }
// // }
export const fetch = async (req, res)=>{
  try{
    const usersData = await user.find()

    if(usersData.length === 0){
      res.status(202).json({
        message: "no data found"
      })
    }
    res.status(202).json(usersData)
  }catch (err){
    res.status(401).json({
      message: err.message
    })
  }
}
// export const findId = async (req, res)=>{
//   try{
//      const {id} = req.params;

//   const findUser =await user.findById(id);

//   if (findUser){
//     res.json(findUser)
//   }else{
//     res.json({
//       message: "could not find user"
//     })
//   }

//   }catch(err){
//     res.json({
//       message:err.message
//     })
//   }
 

// }
// export const findByIdAndUpdate= async (req, res)=>{
// try{
//   const {id } = req.params;
//   const updateUser = await user.findByIdAndUpdate(id, req.body, {new: true});
//   res.json(updateUser)
// }catch(err){
//   res.status(402).json({
//       message:err.message
//     })
// }

// }
// export const deleteUser = async (req, res)=>{
//   try{
//     const {id}= req.params

//     const deleteUSer = await user.findByIdAndDelete(id)
//     res.json(deleteUSer)
//   }catch(err){
//   res.status(402).json({
//       message:err.message
//     })
// }
// }

export const create= async ( req, res, next)=>{
  try{
    const {name, email, password} = req.body
    
    const salt = await bcrypt.genSalt(10);
    const hashedPAssword = await bcrypt.hash(password, salt)

    const newUser = await user.create({
      name,
      email,
      password: hashedPAssword
    });
    res.json(newUser)
  }catch(error){
    next(error)
  }
}

export const login = async(req, res, next)=>{
  try{
    const {email, password}= req.body

    const user = await User.findOne({ email })
    if (!user) {
      const error = new error("user not found");
      error.status= 404
      return next(error)
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      const err = new err("wrong password")
      err.status = 401;
      return next(err)
    }
    // 5. Success
        res.status(200).json({ 
            message: "Credentials verified. The person is who they say they are." 
        });
  }catch(err){
    next(error);
  }
} 

import User from "../models/Book.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // 1. Add this import at the top

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // --- NEW STUFF STARTS HERE ---
    
    // 2. Create the "Ticket" (The JWT)
    const token = jwt.sign(
      { id: findUser._id },      // Payload: What's inside the ticket
      process.env.JWT_SECRET,    // The Secret Stamp
      { expiresIn: "1h" }        // How long the ticket lasts
    );

    // 3. Send the ticket back to the user
    res.status(200).json({ 
      message: "Login Successful!",
      token: token               // This long string is their ticket
    });

  } catch (err) {
    next(err);
  }
}