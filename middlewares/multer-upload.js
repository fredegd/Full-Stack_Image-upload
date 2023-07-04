const multer = require("multer");

const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //cb is a call back
    cb(null, "tmp/product-imgs-upload");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${uniqueSuffix}_${file.fieldname}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); //true to accept, false to reject
  } else {
    cb(new Error("file format not allowed"));
  }
};

const upload = multer({
  dest: "tmp/product-imgs-upload/",
  storage,
  fileFilter,
});

module.exports = upload;
