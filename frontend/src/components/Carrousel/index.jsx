import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';

const WelcomeSlides = () => (
  <Container className="mt-4" style={{ width: '50rem' }}>
    <Row className="justify-content-md-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../first_slide.jpg"
            alt="First welcome slide"
          />
          <Carousel.Caption>
            <h3>Welcome to your todo app</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../second_slide.jpg"
            alt="Second welcome slide"
          />

          <Carousel.Caption>
            <h3>You don&#39;t need paper anymore</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../third_slide.jpg"
            alt="Third welcome slide"
          />

          <Carousel.Caption>
            <h3>Enjoy!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  </Container>

);

export default WelcomeSlides;
