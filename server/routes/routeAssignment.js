const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const multer = require("multer");
const uuid = require("uuid").v4;
const path = require("path");

const files = [];
const fileInArray = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let filePath = [];
    console.log("=====MULTER======");
    console.log("MULTER ENTRY ", file.originalname);
    console.log("files", req.files);
    console.log("file.fieldname", file.fieldname);

    const ext = path.extname(file.originalname);
    const id = uuid();
    filePath = `${id}${ext}`;
    fileInArray.push([filePath]);
    console.log("IN ARRAY ", filePath);
    files.push(fileInArray);
    console.log("PUSHED MAIN ARRAY", fileInArray);
    cb(null, filePath);
    console.log("current length", files.length);
    console.log("===========");
  },
});

const upload = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "video/mp4" ||
      file.mimetype == "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error("Only .png, .jpg, .jpeg .mp4 and .pdf format allowed!")
      );
    }
  },
  storage: storage,
});

// , upload.array("uploaded_File", 10)
router.post("/", upload.single("uploaded_File"), async (req, res) => {
  console.log(": http://localhost:3000/assignment/ reached");
  try {
    // console.log(req.files.length);

    console.log("> req.files", req.file);
    // console.log("> Files", fileInArray);

    const fileName = req.file.filename;
    let fileUpload;
    let fileExt = fileName.split(".")[1];
    const cloudinaryAssignmentFolder = "Assignments";
    const cloudinarySubmissionFolder = "Assignments/Submissions";
    console.log("> req.files", fileName, "\next: ", fileExt);

    for (let i = 0; i < fileInArray.length; i++) {
      console.log("> fileInArray[i][0]: ", fileInArray[i][0]);
    }
    // let fileext = req.file[0].split(".")[1];

    if (fileExt == "jpg" || fileExt == "png" || fileExt == "jpeg")
      fileUpload = await cloudinary.uploader.upload(
        `${path.resolve(__dirname, "../uploads")}/${fileName}`,
        { folder: cloudinaryAssignmentFolder }
      );
    else if (fileExt == "mp4")
      fileUpload = await cloudinary.uploader.upload(
        `${path.resolve(__dirname, "../uploads")}/${fileName}`,
        { resource_type: "video" },
        { folder: cloudinaryAssignmentFolder }
      );
    else if (fileExt == "pdf")
      fileUpload = await cloudinary.uploader.upload(
        `${path.resolve(__dirname, "../uploads")}/${fileName}`,
        { pages: true },
        { folder: cloudinaryAssignmentFolder }
      );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
