import { useState } from 'react';

const DocumentCard = ({ document }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // Implement like functionality here
    setLiked(!liked);
  };

  const handleDelete = () => {
    // Implement delete functionality here
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">{/* Document title */}</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${
              liked ? 'text-blue-500' : ''
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18c-.287 0-.518-.086-.707-.261l-7-6.5a1 1 0 0 1 1.414-1.478L10 15.59l6.293-5.828a1 1 0 1 1 1.414 1.478l-7 6.5A1.005 1.005 0 0 1 10 18z"
                clipRule="evenodd"
              />
            </svg>
            <span>{document.likes}</span>
          </button>
          <button onClick={handleDelete} className="text-red-500">
            Delete
          </button>
        </div>
      </div>
      <img src={document.url} alt="Document thumbnail" className="mt-2 w-full h-auto" />
      <div className="flex justify-between mt-2">
        <span className="text-gray-500">{document.views} views</span>
        <span className="text-gray-500">{/* Date or other info */}</span>
      </div>
    </div>
  );
};

export default DocumentCard;
