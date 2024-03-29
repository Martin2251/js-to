import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Text, Div, Row, Col, Container } from "atomize";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// importing the link from react router dom
const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  // fetch all the products, use effect so its there wen it loads
  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);
  // no products return a loading icon if not return products
  if (!products) return <Loading />;
  return (
    // need to map through the products which we need a key
    // this is styling from atmoize
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} size="3">
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Div p="2rem">
                <Div
                  h="20rem"
                  bgImg={product.images[0].src}
                  bgSize="cover"
                  bgPos="center center"
                  shadow="3"
                  hoverShadow="4"
                  transition="0.3s"
                  m={{ b: "1.5rem" }}
                ></Div>
                <Text
                  tag="h1"
                  textWeight="300"
                  textSize="subheader"
                  textDecor="none"
                  textColor="black500"
                >
                  {product.title}
                </Text>
                <Text
                  tag="h2"
                  textWeight="300"
                  textSize="body"
                  textDecor="none"
                  textColor="gray500"
                >
                  ${product.variants[0].price}
                </Text>
              </Div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
