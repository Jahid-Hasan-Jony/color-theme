import { useContext, useState } from "react";
import { ThemeContext } from "../../ContextAPI/ThemeContext";

const Gallery = () => {
  const { theme } = useContext(ThemeContext);
  const [files, setFiles] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  // Store selected files
  const imageHandler = (e) => {
    setFiles([...e.target.files]); // Convert FileList to array
  };

  // Handle Multiple Image Upload
  const handleUploadMultiple = async () => {
    if (files.length === 0) {
      alert("Please select at least one file!");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file); // Append each file
    });

    try {
      const response = await fetch("http://localhost:3000/gallery", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const res = await response.json();
      setUploadedUrls(res.images.map((img) => img.url)); // Store uploaded image URLs

      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <>
      <section className="min-h-[93vh] bg-background">
        <div className="p-5 flex justify-center items-center flex-wrap flex-col">
          {theme !== "light-mode" ? (
            <img
              className="w-52 my-5"
              src="MTS-Logo-in-white-color-with-text.png"
              alt="Logo"
            />
          ) : (
            <img className="w-52 my-5" src="MTS-Logo-Branding.png" alt="Logo" />
          )}

          <div className="my-5 shadow-box-style bg-card rounded shadow-box-shadow-color p-5 w-96 flex flex-col gap-5">
            <input
              multiple
              className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              onChange={imageHandler}
            />

            <button
              onClick={handleUploadMultiple}
              className="cursor-pointer uppercase w-full hover:scale-95 hover:bg-secondary hover:shadow-btn-shadow-hover-color bg-primary text-cta-text text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
            >
              Upload Images
            </button>
          </div>

          {/* Show Uploaded Images */}
          <div className="flex flex-wrap justify-center mt-5">
            {uploadedUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Uploaded"
                className="w-32 h-32 object-cover m-2 rounded"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
