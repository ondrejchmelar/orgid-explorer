import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Autocomplete from 'react-google-autocomplete';
import { Container, Row, Col, Form, Dropdown, Button } from '@windingtree/wt-ui-react';
import { directories } from './directories';

import "react-datepicker/dist/react-datepicker.css";

class Filters extends Component {

  render() {
    const { 
      startDate, endDate, onStartDateChange, onEndDateChange, onDirectoryChange, selectedDirectory,
      onApply, onLocationChange,
    } = this.props;

    return (
      <Container className="mt-1">
        <Form>
          <Row>
            <Col md={1} className="align-self-center font-weight-bold">
              Directory
            </Col>
            <Col md={2} className="align-self-center">
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
          </Row>
          <Row className="mt-1">
            <Col className="align-self-center font-weight-bold" md={1}>
              Filters
            </Col>
            <Col md={4} className="align-self-center">
              <Autocomplete
                onPlaceSelected={onLocationChange}
                types={['(cities)']}
              />
            </Col>
            <Col className="align-self-center text-right">Creation date</Col>
            <Col className="align-self-center">
              <DatePicker
                selected={startDate}
                onChange={onStartDateChange}
              />
            </Col>
            <Col className="align-self-center">
              <DatePicker
                selected={endDate}
                onChange={onEndDateChange}
              />
            </Col>
            <Col md={2} className="align-self-center">
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