import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <Container className="fuid bg-dark">
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Adrees</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
              <Form.Text className="text-muted">We'll never share your email adress, trust us!</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="passwordl" placeholder="password" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary">Login</Button>
      </Form>
      <Card className="mb-3">
        <Card.Img src='https://picsum.photos/200/100' />
        <Card.Body>
          <Card.Title>Lorem Ipssum</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ante semper, posuere risus quis, lobortis erat. Nunc volutpat sem est, sit amet aliquam velit condimentum et. Sed vestibulum eros ultricies neque congue, quis facilisis sem commodo. Ut bibendum, elit sed facilisis efficitur, tortor enim ornare erat, eget interdum nisl nibh ac est. Aenean nec nunc ipsum. Duis faucibus est risus, sit amet ullamcorper odio laoreet ut. Ut nec leo velit. Duis luctus gravida purus, vel auctor tortor vehicula nec. Curabitur suscipit erat ac mauris egestas scelerisque nec eget lacus. Sed mollis consectetur dui, malesuada viverra nisi tempor at. In hendrerit massa diam, quis feugiat augue venenatis nec. Quisque quis luctus nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Generated 1 paragraph, 124 words, 819 bytes of Lorem Ipsum
          </Card.Text>
          <Button variant="primary">Read more...</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="primary">This is a button</Alert>
      <Button>Test button</Button>
    </Container>
  );
}

export default App;
