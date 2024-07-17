import React from 'react';
import { Form, FormControl, Image, Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhotoVideo, FaCalendarAlt, FaEdit } from 'react-icons/fa';
import "../App.css";

const PostCreator = ({ width }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div 
            className="p-3 rounded shadow-sm" 
            style={{ 
              width: '100%', 
              maxWidth: width, 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderRadius: '20px', 
              border: '1.5px solid #d3d3d3' 
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <Image 
                src="https://via.placeholder.com/50" 
                roundedCircle 
                style={{ width: '50px', height: '50px', marginRight: '15px' }} 
              />
              <Form className="d-flex flex-grow-1">
                <FormControl 
                  type="text" 
                  placeholder="Crea un post" 
                  className="mr-sm-2" 
                  style={{ borderRadius: '500px' }} 
                />
              </Form>
            </div>
            <div className="d-flex justify-content-between">
              <Button 
                variant="light" 
                className="d-flex align-items-center border-0 custom-button" 
              >
                <FaPhotoVideo className="mr-2" style={{ color: 'blue' }} />
                Contenuti multimediali
              </Button>
              <Button 
                variant="light" 
                className="d-flex align-items-center border-0 custom-button" 
              >
                <FaCalendarAlt className="mr-2" style={{ color: 'orange' }} />
                Evento
              </Button>
              <Button 
                variant="light" 
                className="d-flex align-items-center border-0 custom-button" 
              >
                <FaEdit className="mr-2" style={{ color: 'red' }} />
                Scrivi un articolo
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCreator;
