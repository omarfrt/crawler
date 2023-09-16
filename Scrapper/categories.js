const fs = require('fs');
const path = require('path');
function getFilesInDirectory(directoryPath) {
    try {
      // Read the contents of the directory
      const fileNames =  fs.readdirSync(directoryPath);
  
      // Filter out directories (if you want only files) and remove file extensions
      const files = fileNames
        .filter((fileName) => {
          const filePath = path.join(directoryPath, fileName);
          return fs.statSync(filePath).isFile();
        })
        .map((fileName) => path.parse(fileName).name);
  
      return files;
    } catch (error) {
      console.error('Error reading directory:', error);
      return [];
    }
  }




module.exports =getFilesInDirectory