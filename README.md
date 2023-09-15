# crawler
Crawlo Technical test ( web crawler)
## Available Scripts

In this project directory, you can run:
###  Scraping
 ```sh 
node .\src\Scrapper\index.js
```
it scrapes data from targetand statically saves is .JSON file<br>

Dont forget to change the target urls:<br>
```js
const axiosResponse = await axios.request({
    method:"GET",
    url: "https://www.mediamarkt.es/es/category/_port%C3%A1tiles-de-hasta-14-701421.html",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
})
```
urls i choose:
```js
 {
    url: "https://www.mediamarkt.es/es/category/_port%C3%A1tiles-de-hasta-14-701421.html",
    url:"https://www.mediamarkt.es/es/category/pc-gaming-163.html",
    url:"https://www.mediamarkt.es/es/category/smartphones-263.html"
}
```

# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
