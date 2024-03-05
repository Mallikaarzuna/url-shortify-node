//import Url from '../models/Url.js';
import UserUrl from '../models/UserUrl.js';

export const getUrls = async (req, res) => {
  try {
    //const urlData = await UserUrl.find();
    const urlData = await UserUrl.find({
      user: req.user.username,
    });

    res.status(200).json(urlData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserUrls = async (req, res) => {
  try {
    //const userUrlData = await UserUrl.find();
    const userUrlData = await UserUrl.findOne({
      user: req.user.username,
    });
    console.log(userUrlData);
    res.status(200).json(userUrlData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
