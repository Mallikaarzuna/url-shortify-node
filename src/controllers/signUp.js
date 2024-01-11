import bcrypt from 'bcrypt';
//import User from '../models/User.js';
import Signup from '../models/Signup.js';

export const handlerRegisterUser = async (req, res) => {
  const user = req.body;

  try {
    const hashedPassword = await bcrypt.hash(user.password, +process.env.SALT);
    const signUpModel = new Signup({ ...user, password: hashedPassword });
    const savedData = await signUpModel.save();
    const updatedUserObject = savedData.toObject();
    delete updatedUserObject.password;
    res.status(201).json(updatedUserObject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'Rejected' });
  }
};
