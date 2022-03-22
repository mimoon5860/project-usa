const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'photos/adsPhotos/');
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("_") + "-" + Date.now();

        cb(null, fileName + fileExt);
    }
})


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(new Error("File upload error check file size/type"))
        }
    }
});


const multiFile = upload.array('photos', 6);

module.exports = multiFile;
