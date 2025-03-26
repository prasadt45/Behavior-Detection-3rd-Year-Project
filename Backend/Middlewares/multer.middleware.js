import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Store files temporarily
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Prevent duplicate filenames
    }
});

export const upload = multer({
    storage,
});