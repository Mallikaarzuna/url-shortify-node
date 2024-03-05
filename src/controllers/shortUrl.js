import shortid from 'shortid';
//import Url from '../models/Url.js';
import UserUrl from '../models/UserUrl.js';
import jwt from 'jsonwebtoken';

export const getShortUrl = async (req, res) => {
  // Extract user details from the JWT token in the cookie
  //const token = req.cookies.token;

  // if (!token) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  //const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Replace 'your-secret-key' with your actual JWT secret
  //const user = decodedToken.username;

  const user = req.user.username;

  const { longUrl } = req.body;

  // Generate a unique short ID
  const shortId = shortid.generate();

  // Create the short URL by combining the base URL and the short ID
  //const shortUrl = `http://localhost:3000/${shortId}`;

  const shortUrl = shortId;

  // Store the mapping between short and long URLs in database
  const urlData = {
    user: user,
    shortUrl,
    longUrl,
    clicks: 0,
  };

  try {
    //const urlModel = Url(urlData);
    const urlModel = UserUrl(urlData);
    const savedData = await urlModel.save();

    res.status(201).json(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'Rejected' });
  }

  // Send back the short URL
  // res.json({ shortUrl });
};
