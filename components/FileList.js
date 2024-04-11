

import React, { useState, useEffect } from 'react';

const FileList = () => {
  const [fileLinks, setFileLinks] = useState([]);

  useEffect(() => {
    fetchFileLinks();
  }, []);

  const fetchFileLinks = async () => {
    try {
      const response = await fetch('/api/files');
      if (!response.ok) {
        throw new Error('Failed to fetch file links');
      }
      const data = await response.json();
      setFileLinks(data);
    } catch (error) {
      console.error('Error fetching file links:', error);
    }
  };

  return (
    <div>
      <h2>List of Uploaded Files</h2>
      <ul>
        {fileLinks.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
