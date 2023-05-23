// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import User from "../models/user.js";
/* SIGN_UP USER */
export const signup = async (req, res) => {
  try {
    // res.status(201).json();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ msg: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
