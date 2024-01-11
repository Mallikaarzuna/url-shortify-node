import shortid from 'shortid';
import Url from '../models/Url.js';

export const getShortUrl = async (req, res) => {
  const { longUrl } = req.body;

  // Generate a unique short ID
  const shortId = shortid.generate();

  // Create the short URL by combining the base URL and the short ID
  const shortUrl = `http://localhost:3000/${shortId}`;

  // Store the mapping between short and long URLs in database
  const urlData = {
    shortUrl,
    longUrl,
    clicks: 0,
  };

  try {
    const urlModel = Url(urlData);
    const savedData = await urlModel.save();

    res.status(201).json(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'Rejected' });
  }

  // Send back the short URL
  // res.json({ shortUrl });
};
