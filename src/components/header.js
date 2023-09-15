import React from "react";
import * as Typography from "./typography"
import styled from "styled-components";
import {  Link, useParams  } from "react-router-dom";




const HeaderLink = styled(Typography.Small)`
  text-transform: uppercase;
  padding: 4px 16ps 32px;
  color: ${({ isActive }) => (isActive ? "#4ECE7B" : "#1D1F22")};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #5ece7b" : "none")};
`;
const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 72px;
  padding: 0 88px;
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 999;
  background-color: white;
`;
const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flext-start;
  width: 100%;
`;
const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Logo = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
`;
const ActionsContainer = styled.div`
  display: flex;
  gap: 22px;
`;
const CartIconLayout = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  div {
    background-color: black;
    border-radius: 999px;
    position: absolute;
    top: -12px;
    right: -12px;
    width: 20px;
    height: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
  }
`;
function Header(){
    const {category}= useParams();
    const categories = ["Portátiles de hasta 14\"","PC gaming","Móviles y Smartphones"]
    return(
        <Layout>
            <Container>
              <LinksContainer>
                      <>
                     
                        {categories.map((Category, index) => (
                            
                          <Link to={`/${Category}`} key={index}>
                            <HeaderLink
                              key={Category}
                              isActive={Category === category}
                            >
                              {Category}
                            </HeaderLink>
                          </Link>
                        ))}
                      </>
              </LinksContainer>
              <Logo src="/a-logo.svg" alt="Logo" />
              <ActionsContainer>
                <CartIconLayout>
                  <img
                    src="/cart.svg"
                    alt="cart"
                    
                  />
                </CartIconLayout>
              </ActionsContainer>
            </Container>
          </Layout>
    )
}

  export default Header;
