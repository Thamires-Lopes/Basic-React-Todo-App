import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';

const WelcomeCard = ({ title, subtitle, image }) => (
  <Card>
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle className="mb-2 text-center">
        {subtitle}
      </Card.Subtitle>
      <Container>
        <Row className="justify-content-md-center">
          <Card.Img style={{ width: '50rem' }} src={image} />
        </Row>
      </Container>
    </Card.Body>
  </Card>
);

export default WelcomeCard;
