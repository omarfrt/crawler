import React, { useEffect, useState } from "react";
import Header from "../components/header";
import ProductCardContainer from "../components/productCartContainer";
import * as Typography from "../components/typography";
import styled from "styled-components";
import PageContainer from "../components/pageContainer";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import laptops from '../ScrapperData/portatiles-de-hasta-14.json'
import gaming from "../ScrapperData/pc-gaming.json" 
import phones from "../ScrapperData/moviles-y-smartphones.json"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 80px 0px 190px;
`;
const Title = styled(Typography.H2)`
  text-transform: capitalize;
`;
function Category() {
  const { category } = useParams(); // Get category from the URL
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(category);
  const categoryDataName = currentCategory.replace(/ /g, '-');
  const baseURL = `http://localhost:3001/api/categories/${categoryDataName}`;
  const categoriesURL = 'http://localhost:3001/api/categories';

  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  useEffect(() => {
    // Update the category when it changes in the URL
    setCurrentCategory(category);
  }, [category]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const arr = res.data;
      setProducts(arr);
    });
  }, [baseURL]); // Fetch products whenever baseURL changes

  useEffect(() => {
    axios.get(categoriesURL).then((response) => {
      const arr = response.data;
      const modifiedArr = arr.map((item) => {
        return item.replace(/-/g, ' ');
      });
      setCategories(modifiedArr);
    });
  }, [categoriesURL]); // Fetch categories whenever categoriesURL changes

  return (
    <PageContainer>
      <Header categories={categories} onCategoryChange={handleCategoryChange} />
      <Container>
        <Title>{currentCategory}</Title>
        <ProductCardContainer>
          <>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </>
        </ProductCardContainer>
      </Container>
    </PageContainer>
  );
}


export default Category ;
