import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from '@windingtree/wt-ui-react';
class OrgIdInput extends Component {

  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="ORG.ID Address" type="text"/>
            </Col>
            <Col md={1} className="mr-1">
              <Button variant="primary" type="submit">
                GO
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default OrgIdInput;
  
