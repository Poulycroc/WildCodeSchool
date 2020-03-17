import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import axios from "axios";

class HomePage extends Component {
  state = {
    todos: [],
    error: false
  };

  renderTodos() {
    return this.state.todos.map((item, key) => (
      <ListGroup.Item key={key}>{item.title}</ListGroup.Item>
    ));
  }

  async componentDidMount() {
    const { data } = await axios.get("todos");
    this.setState({ todos: data });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>Home page</Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>{this.renderTodos()}</ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
