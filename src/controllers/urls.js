import Url from '../models/Url.js';

export const getUrls = async (req, res) => {
  try {
    const urlData = await Url.find();

    res.status(200).json(urlData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
