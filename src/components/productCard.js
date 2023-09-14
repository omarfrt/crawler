import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cover = styled.img`
  opacity: 1;
  width: 354px;
  height: 330px;
`;
const Title = styled(Typography.PL)`
  color: #1d1f22;
  margintop: 24px;
`;
const Price = styled(Typography.PM)`
  color: #1d1f22;
`;
const Small =styled(Typography.Small)`
color: #1d1f22;
`
const CartButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 0px;
  transform: translateY(50%);
  padding: 14px;
  background-color: #5ece7b;
  border-radius: 50%;
  box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
`;
const CardLink = styled(Link)`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  opacity: ${({ isDisabled }) => isDisabled && 0.5};
  pointer-events: ${Title}, ${Price} {
    color: ${({ isDisabled }) => isDisabled && "#8D8F9A"};
  }
  ${Cover} {
    opacity: ${({ isDisabled }) => isDisabled && 0.5};
  }
  &:hover,
  &:focus-within {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  ${CartButton} {
    opacity: 0;
  }
  &:hover ${CartButton} {
    opacity: 1;
  }
`;
const Details = styled.div`
display: flex;
flex-direction: column;
`
const ImgDiv = styled.div`
position: relative;
`;
const OutOfStock = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #8d8f9a;
`;

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, url, img, price, availabilty, delivery, specifications } =this.props.product; 
    const newprice =price.replace(/\.00(?!.*\.00)/, '.00');
    console.log(newprice);
    return (
      <CardLink
        to={`${url}`}
        
      >
         <ImgDiv>
          <Cover src={img} alt="Product" />
          
          <CartButton>
                   <img src="/empty_cart.svg" alt="cart" />
                 </CartButton>    
        </ImgDiv>
        <Details>
                <Title>{name}</Title>
                {specifications.map((spec,index)=>( 
                  <div key={index}>
                  <Price>{spec.key}</Price>
                <Small>{spec.value}</Small>
                  </div>   
                ))}
                <Price>Delivery time :</Price>
                <Small>{delivery}</Small>
                <Price>Price:</Price>
                <Price>{newprice}€</Price> 
               
                </Details>
      </CardLink>
    );
  }
}

export default ProductCard;
