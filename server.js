const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const performScraping =require('./Scrapper/index');
const getFilesInDirectory = require('./Scrapper/categories');
// Choose a port number
const port = 3001;

app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(bodyParser.json());
  //routes
  // Define your routes here
app.get('/api/categories/:category', (req, res) => {
    const filename = req.params.category;
    const data =require(`./data/${filename}.json` );
    // Handle the API request and send a response
    res.status(200).json(data);
});
app.get('/api/categories',(req,res)=>{
    const directoryPath = 'data';
    const files = getFilesInDirectory(directoryPath);
    res.status(200).json(files)
})
app.post('/api/scrape', async (req,res)=>{
    const url = req.body.url;
    const filename=await performScraping(url);
    const data =require(`./data/${filename}.json` );
    res.status(200).json(data)
})
  //err handling 
  app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

  
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});