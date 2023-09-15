import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction:column;
  gap:28px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margintop: 103px;
`;

class ProductCardContainer extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return <Container {...props}>{children}</Container>;
  }
}

export default ProductCardContainer;
