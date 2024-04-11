import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Upload File</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fileInput" className="block text-gray-700 font-medium">Select File:</label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input"
          />
        </div>
        <button
          type="submit"
          className="upload-button"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
