const router = require("express").Router();
const upload = require("../middleware/multer");
const cloudinaryUpload = require("../controller/cloudinaryUpload");

router.post("/", upload.single("uploaded_File"), async (req, res) => {
  let fileUpload;

  const cloudinarySubmissionFolder = "Assignments/Submissions";
  try {
    fileUpload = await cloudinaryUpload(req, cloudinarySubmissionFolder);
  } catch (error) {
    console.log(error);

    //
  }
});

module.exports = router;

module.exports = router;
