import Signup from '../models/Signup.js';
import bcrypt from 'bcrypt';
import { JWT_COOKIE_NAME } from '../constants/index.js';
import jwt from 'jsonwebtoken';

/*
export const handleLoginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Signup.findOne({ username });

    if (!user) {
      throw new Error('User not found');
    }
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      throw new Error('Authentication Failed');
    }

    //JWT - Stateless authentication
    const payload = {
      id: user._id,
      username,
      firstName: user.firstName,
      lastName: user.lastname,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie(JWT_COOKIE_NAME, token, { httpOnly: true });

    res.redirect('/');

    res.send();
  } catch (err) {
    console.log(err);
    res.status(404).json({ errorMsg: 'Invalid username or password !!!' });
  }
};
*/

export const handleLoginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Signup.findOne({ username });

    if (!user) {
      // User not found
      return res.status(404).json({ errorMsg: 'User not found' });
    }

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      // Authentication failed
      return res.status(401).json({ errorMsg: 'Authentication failed' });
    }

    // JWT - Stateless authentication
    const payload = {
      id: user._id,
      username,
      firstName: user.firstName,
      lastName: user.lastname,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    // Set JWT as an HTTP-only cookie
    res.cookie(JWT_COOKIE_NAME, token, {
      httpOnly: true,
      //sameSite: 'none',
      //domain: 'localhost:5173',
    });

    // Send a response with the token if needed
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: 'Internal server error' });
  }
};
