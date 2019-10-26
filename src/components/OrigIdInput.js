import React from 'react';
import { Container, Row, Col, Form, Button } from '@windingtree/wt-ui-react';
import { LinkContainer } from 'react-router-bootstrap';

const OrgIdInput = ({ value, onChange, onClick }) =>(
  <Container className="mb-1">
    <Form>
      <Row>
        <Col className="mt-1">
          <Form.Control placeholder="ORG.ID Address" type="text" onChange={onChange} value={value}/>
        </Col>
        <Col md={2} className="mt-1">
          <LinkContainer to={`/orgid/${value}`} >
            <Button variant="primary" onClick={onClick} block>
              GO
            </Button>
          </LinkContainer>
   
        </Col>
      </Row>
    </Form>
  </Container>
);

export default OrgIdInput;
  
