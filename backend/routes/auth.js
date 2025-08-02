import express from 'express';
import { login, logout, refreshToken, register } from '../controller/authController';

const router = express.Router();

router.post("/register", register)
router.post("/login", login);
router.get("/refresh",refreshToken);
router.post("/logout", logout);


export default router;