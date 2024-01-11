import multer from 'multer';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files will be stored
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
});

export const uploadFile = multer({ storage });
