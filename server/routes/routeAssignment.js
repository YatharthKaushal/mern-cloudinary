const router = require("express").Router();
const upload = require("../middleware/multer");
const cloudinaryUpload = require("../controller/cloudinaryUpload");
const Assignment = require("../models/assingmentSchema");

router.post("/", upload.single("uploaded_File"), async (req, res) => {
  let fileUpload;

  const cloudinaryAssignmentFolder = "Assignments";
  const details = await JSON.parse(req.body.details);

  try {
    fileUpload = await cloudinaryUpload(req, cloudinaryAssignmentFolder);

    let assignment = new Assignment({
      title: details.title,
      subject: details.subject,
      file_type: `${fileUpload.resource_type}/${fileUpload.format}`,
      file_url: fileUpload.secure_url,
      cloudinary_file_id: fileUpload.public_id,
      submission_date: details.submissionDate,
    });

    await assignment.save();
    res.status(201).json(assignment);
    // console.log("> fileupload: ", fileUpload);
    // console.log("> request body: ", JSON.parse(details));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Upload failed" });

    //
  }
});

router.get("/", async (req, res) => {
  try {
    let assignment = await Assignment.find();
    res.json(assignment);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
