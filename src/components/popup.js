import styled from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
display:flex;
flex-direction: column;
gap: 60px;
box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
width:700px;
height: 600px;
position: absolute;
      top: 40%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);

`
const ScrpBtn = styled.button`
width:100px;
height:40px;
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
$:hover {
  background-color: #2c974b;
}
$:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}
`
const DoneBtn= styled(Link)`
width:100px;
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
$:hover,
$:focus {
  background-color: #F082AC;
}
background-color: ${(props) => (props.disabled ? '#CCCCCC' : '#EA4C89')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`
const BtnWrapper = styled.div`
display:flex;
justify-content: center;
gap: 20px
`
const categoryLinks= [  "https://www.mediamarkt.es/es/category/_port%C3%A1tiles-de-hasta-14-701421.html",
"https://www.mediamarkt.es/es/category/pc-gaming-163.html",
"https://www.mediamarkt.es/es/category/smartphones-263.html"]
   

export function PopUp(){
const [category,setCategory]= useState('');
const [link,setLink] = useState();

async function handleClick(){
const baseUrl ="http://localhost:3001/api/scrape"
 await axios.post(baseUrl, {
      url: link
    })
    .then((response) => {
      const data =response.data;
      setCategory(data);
        console.log(data);
    });
}
    return(
       <Wrapper>
        please inter links to scrape:
        <input onChange={(e)=>setLink(e.target.value)} placeholder="Put your Url here ..."/>
        <BtnWrapper>
        <ScrpBtn onClick={handleClick}>Scrape</ScrpBtn>
        <DoneBtn to={`/${category}`} disabled={category === ''}> Done</DoneBtn>
        </BtnWrapper> 
       
        Examples:
        {categoryLinks.map((link,index)=>(
            <div key={index}>
            {link}
            </div>
        ))}
        
       </Wrapper>
    )
}
