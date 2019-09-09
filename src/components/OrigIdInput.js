import React from 'react';
import { Container, Row, Col, Form, Button } from '@windingtree/wt-ui-react';

const OrgIdInput = ({ value, onChange }) =>(
  <Container className="mb-1">
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="ORG.ID Address" type="text" onChange={onChange} value={value}/>
        </Col>
        <Col md={1} className="mr-1">
          <Button variant="primary" type="submit" href={`/orgid/${value}`}>
            GO
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);

export default OrgIdInput;
  
