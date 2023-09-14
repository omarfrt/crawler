import React from "react";
import Header from "../components/header";
import ProductCardContainer from "../components/productCartContainer";
import * as Typography from "../components/typography";
import styled from "styled-components";
import PageContainer from "../components/pageContainer";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";


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
  const {category}= useParams();
  const data=[{},{},{},{},{},{},{},{}]
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

// class category extends React.Component {
//   constructor(props) {
//     super(props);
// }
//   render() {
//     console.log(this.props);
//     //let{category} = this.props.match.params;
   
//     return (
      
//     );
  
//   }
// }

export default Category ;
