const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment", // This refers to the Assignment schema
  },
  video: {
    type: String,
  },
  pdf: {
    type: String,
  },
  cloudinary_id_img: {
    type: String,
  },
  cloudinary_id_vid: {
    type: String,
  },
  cloudinary_id_pdf: {
    type: String,
  },
  submission_date: {
    type: Date,
    default: Date.now(),
  },
  /* 
  * assignment submitted by whom
  student: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Student", // This refers to the Assignment schema
  },*/
});

module.exports = mongoose.model("Submission", submissionSchema);

/*
* In the code, secure_url and public_id are properties returned by Cloudinary after a successful file upload. Here's what they represent:

?secure_url: (name, video, pdf)
It's the direct link to the file stored on Cloudinary, which can be used to embed the image, video, or PDF in a website or application.

?public_id: (cloudinary_id_img, cloudinary_id_vid, cloudinary_id_pdf)
It can be used to reference the file later, such as for updating or deleting it from Cloudinary. The public_id helps Cloudinary manage the file.
*/
