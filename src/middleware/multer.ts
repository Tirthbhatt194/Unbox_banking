import multer from "multer";

// middleware multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});


// middleware multer file filter
const filter = (
  req: any,
  file: { mimetype: string },
  cb: (arg0: null, arg1: boolean) => void
) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// middleware handler for multi file upload
export const upload = multer({
  storage: storage,
  fileFilter: filter,
  limits: {
    fields: Infinity,
    fieldNameSize: 100000,
  },
}).any();

// middleware handler for single file upload
export const upload1 = multer({
  storage: storage,
  fileFilter: filter,
  limits: {
    // fields: Infinity,
    fieldNameSize: 10000000,
  },
});
