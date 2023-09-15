import React from "react";
import Header from "../components/header";
import ProductCardContainer from "../components/productCartContainer";
import * as Typography from "../components/typography";
import styled from "styled-components";
import PageContainer from "../components/pageContainer";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import laptops from "../Scrapper/portatiles-de-hasta-14.json"
import gaming from "../Scrapper/pc-gaming.json" 
import phones from "../Scrapper/moviles-y-smartphones.json"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 80px 0px 190px;
`;
const Title = styled(Typography.H2)`
  text-transform: capitalize;
`;
function Category(){
  let data;
  const {category}= useParams();
  const categories = ["Portátiles de hasta 14\"","PC gaming","Móviles y Smartphones"]
  if (category=== categories[2]) {
    data =phones
  }else if (category === categories[1]) {
    data =gaming
  }else{
    data=laptops
  }
 
  return(
    <PageContainer>
        <Header />
        <Container>
          <Title>{category}</Title>
          <ProductCardContainer>
              
                  <>
                    {data.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </>
               
            
          </ProductCardContainer>
        </Container>
      </PageContainer>
  )
}

export default Category ;
