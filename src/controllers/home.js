import Url from '../models/Url.js';

export const handleShortUrl = async (req, res) => {
  const { shortId } = req.params;
  //console.log(shortId);
  try {
    // Find the document with the provided shortUrl
    //const urlDocument = await Url.findOne({ shortUrl });

    const urlDocument = await Url.findOne({
      shortUrl: `http://localhost:3000/${shortId}`,
    });

    http: console.log(urlDocument);
    if (urlDocument) {
      // Increment the clicks count
      urlDocument.clicks += 1;
      await urlDocument.save();

      // Redirect to the longUrl
      res.redirect(urlDocument.longUrl);
    } else {
      // Handle the case where the short URL does not exist
      res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
