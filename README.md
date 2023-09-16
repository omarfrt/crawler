# crawler
Crawlo Technical test ( web crawler)
## Available Scripts

In this project directory, you can run:
# Starting the application

### `npm start`

Runs the app and the express server in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


###  Scraping
 ```sh 
node Scrapper\index.js
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


