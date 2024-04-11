

const getFileLinksFromDatabase = async (req, res) => {
    try {
      const fileLinks = await fetchFileLinksFromDatabase(); 
  
      res.json(fileLinks);
    } catch (error) {
      console.error('Error fetching file links:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  module.exports = {
    getFileLinksFromDatabase,
  };
  