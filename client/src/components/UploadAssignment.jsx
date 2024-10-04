import { useState } from "react";

const UploadAssignment = () => {
  const [file, setFile] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const upload = async (e) => {
    try {
      e.preventDefault();

      console.log("> BACKEND_URL from .env: ", BACKEND_URL);
      const data = new FormData();
      const details = {
        title: "Title",
        subject: "Subject",
        submissionDate: Date.now(),
      };
      data.append("uploaded_File", file);
      data.append("details", JSON.stringify(details));
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
    <div className="w-full">
      <section className="w-fit m-auto">
        <h1 className=" font-bold text-4xl p-2">Upload Assignment</h1>
        <form onSubmit={upload} encType="multipart/form-data" className=" ">
          <div className="form-group flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title"
              required
              className="form-control-file w-full text-sm text-slate-500 file:mr-4 py-1 px-4 file:text-sm font-semibold border border-black rounded-md"
            />

            <input
              type="text"
              placeholder="Subject"
              required
              className="form-control-file w-full text-sm text-slate-500 file:mr-4 py-1 px-4 file:text-sm font-semibold border border-black rounded-md"
            />

            <input
              type="Date"
              required
              className="form-control-file w-full text-sm text-slate-500 file:mr-4 py-1 px-4 file:text-sm font-semibold border border-black rounded-md"
            />

            <input
              type="file"
              accept=".png,.jpg,.jpeg,.pdf,.mp4"
              required
              filename="uploaded_File"
              className="form-control-file w-full text-sm text-slate-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold border border-black rounded-md"
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
          <button className="w-full p-1 border border-black my-2 rounded-md hover:bg-zinc-300">
            Upload
          </button>
        </form>
      </section>
    </div>
  );
};

export default UploadAssignment;
