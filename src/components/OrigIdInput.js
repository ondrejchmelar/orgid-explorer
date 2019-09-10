import React from 'react';
import { Container, Row, Col, Form, Button } from '@windingtree/wt-ui-react';
import { LinkContainer } from 'react-router-bootstrap';

const { PUBLIC_URL } = process.env;

const OrgIdInput = ({ value, onChange }) =>(
  <Container className="mb-1">
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="ORG.ID Address" type="text" onChange={onChange} value={value}/>
        </Col>
        <Col md={1} className="mr-1">
          <LinkContainer to={`${PUBLIC_URL}/orgid/${value}`} >
            <Button variant="primary">
              GO
            </Button>
          </LinkContainer>
          
        </Col>
      </Row>
    </Form>
  </Container>
);

export default OrgIdInput;
  
