const cheerio = require("cheerio");
const axios = require("axios");

async function performScraping(){
const Products= [];
const axiosResponse = await axios.request({
    method:"GET",
    url: "https://www.mediamarkt.es/es/category/_port%C3%A1tiles-de-hasta-14-701421.html",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
})
const $ = cheerio.load(axiosResponse.data);
$(".Card-styled__StyledCard-sc-da04f143-0.YGFtd.CardProduct-styled__StyledCard-sc-5bb8ec6d-3.iThpmL.ProductTile-styled__StyledCardProduct-sc-b0d9c874-1.ggLmmb")
.each((i,el)=>{
    const name = $(el).find(".CardProductTitle-styled__StyledCardProductTitle-sc-baeb2da0-0.hJKXhz").attr("title");
    const url= $(el).find(".Link-styled__StyledLinkRouter-sc-db43135e-1.KoJzC.ProductTile-styled__StyledProductTileLink-sc-b0d9c874-0.eVPjUz").attr("href");
    const img=$(el).find(".CardProductProductImage-styled__StyledImage-sc-8138b62a-3.nnzxm").children("img").attr("src");
    const price= $(el).find(".sc-fEXmlR.kwQPGE").text();
    const ProductAttributes= [];
    const specifications= $(el).find(".ListDescription-styled__StyledListDescription-sc-9766fcc9-0.enyNVD")
    .children()        
    .each((t,val)=>{
            const values = $(val).text();
            ProductAttributes.push(values);
        })
        //thank you chat GPT for thus vvvvvvv <3
 const transformedArray = [];
for (let i = 0; i < ProductAttributes.length; i += 2) {
    const key = ProductAttributes[i];
    const value = ProductAttributes[i + 1];
    
    if (key && value) {
        const transformedObject = {
            key: `${key}:`,
            value
        };
        transformedArray.push(transformedObject);
    }
}
 
    const product = {
         name: name,
         url: "https://www.mediamarkt.es"+url,
         img: img,
         price: price,
         availability:"InStock",
         delivery:"24h",
        specifications: transformedArray,
         }
    Products.push(product);
 })
console.log(JSON.stringify(Products));
}

performScraping()
