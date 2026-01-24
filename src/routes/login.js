import express from 'express';
import { userLogin } from '../../controllers/userController.js';

const login = express.Router();
login.post("/login", userLogin)

export default login

