import express from "express"
import { Login, Register, follow, getOtherUsers, logout } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";
const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/otheruser/:id").get(isAuthenticated,getOtherUsers);
router.route("follow/:id").post(isAuthenticated,follow);

export default router;