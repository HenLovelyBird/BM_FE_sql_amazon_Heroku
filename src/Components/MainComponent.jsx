import React from "react";
import { Container, Row, Col } from "reactstrap";

class MainComponent extends React.Component {
  state = {
    search: "",
    products: [],
    reviews: []
  };
  render() {
    return (
      <Container>
        <Row className="md-3">
          <Col>
            {this.state.products.map((product, index) => (
              <>
                <h6>
                  <b>{product.name}</b>
                </h6>
                <Row className="ml-2">
                  <img
                    src={product.imgURL}
                    alt="randomly generated images"
                    style={{ maxwidth: "100%" }}
                  ></img>
                  <Col>
                    <div key={index}></div>
                    <div>
                      <b>Description:</b>
                      {product.description}
                    </div>
                    <div>
                      <b>Brand:</b> {product.brand}
                    </div>
                    <div>
                      <b>Price:</b> €{product.price}
                    </div>
                    <div>
                      <b>Category:</b> {product.category}
                    </div>
                  </Col>
                </Row>
              </>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }

  componentDidMount = async () => {
    const resp = await fetch("https://henibebooks.herokuapp.com/products");
    const jsonProducts = await resp.json();

    this.setState({
      products: jsonProducts
    });
  };
}
export default MainComponent;
