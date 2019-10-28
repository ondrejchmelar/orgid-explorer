import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Autocomplete from 'react-google-autocomplete';
import { Container, Row, Col, Form, Dropdown, Button } from '@windingtree/wt-ui-react';
import { directories, environments } from './filterInfo';

import "react-datepicker/dist/react-datepicker.css";

class Filters extends Component {

  render() {
    const { 
      startDate, endDate, onStartDateChange, onEndDateChange, onDirectoryChange, selectedDirectory,
      onApply, onLocationChange, onEnvironmentChange, selectedEnvironment,
    } = this.props;

    return (
      <Container className="mt-1">
        <Form>
          <Row>
            <Col md={1} xs={4} className="align-self-center font-weight-bold mt-1">
              Directory:
            </Col>
            <Col md={4} xs={12} className="mt-1">
              <Dropdown
                onSelect={onDirectoryChange}
              >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                {selectedDirectory}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    directories.map(directory => (
                      <Dropdown.Item key={directory} eventKey={directory}>
                        {directory}
                      </Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md="auto" xs={4} className="align-self-center font-weight-bold mt-1">
              Environment:
            </Col>
            <Col md={4} xs={12} className="align-self-center mt-1">
              <Dropdown
                onSelect={onEnvironmentChange}
              >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                {selectedEnvironment}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    environments.map(environment => (
                      <Dropdown.Item key={environment} eventKey={environment}>
                        {environment}
                      </Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col  md={1} className="align-self-center font-weight-bold mt-1 mt-2">
              Filters:
            </Col>
            <Col md={4} className="align-self-center mt-md-1">
              <Autocomplete
                onPlaceSelected={onLocationChange}
                types={['(cities)']}
              />
            </Col>
            <Col md="auto" className="align-self-center mt-1">Creation date</Col>
            <Col className="align-self-center mt-md-1">
              <DatePicker
                selected={startDate}
                onChange={onStartDateChange}
              />
            </Col>
            <Col className="align-self-center mt-md-1">
              <DatePicker
                selected={endDate}
                onChange={onEndDateChange}
              />
            </Col>
            <Col md={2} className="align-self-center mt-2 mt-md-1">
              <Button
                onClick={onApply} 
                variant="dark" 
                block
                outlined
                >
                  Apply
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Filters;  