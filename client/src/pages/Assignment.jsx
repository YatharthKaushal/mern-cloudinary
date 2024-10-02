// import React from "react";
import { useState } from "react";

const Assignment = () => {
  const [file, setFile] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const upload = async (e) => {
    try {
      e.preventDefault();

      console.log("> BACKEND_URL from .env: ", BACKEND_URL);
      const data = new FormData();

      data.append("uploaded_File", file);
      console.log("> file[0]: ", file);

      // http://localhost:3000/
      // ${BACKEND_URL}/assignment
      const res = await fetch(`${BACKEND_URL}/assignment`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setFile(null);
        // history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <form onSubmit={upload} encType="multipart/form-data">
        Upload File
        <div className="form-group">
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.pdf,.mp4"
            required
            filename="uploaded_File"
            className="form-control-file"
            onChange={(e) => {
              console.log("> e target files", e.target.files);
              console.log("> e target files[0]", e.target.files[0]);
              const maxSizeInBytes = 50 * 1024 * 1024; // Convert 50MB to bytes

              if (file && file.size > maxSizeInBytes) {
                alert(
                  `File size exceeds the 50MB limit. Please select a smaller file.`
                );
                e.target.value = null; // Reset the input field
              } else {
                // setFile(file);
                setFile(e.target.files[0]);
              }
              // setFile(e.target.files[0]);
            }}
          />
        </div>
        <button className="mt-2" type="submit" variant="primary" size="lg">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Assignment;
