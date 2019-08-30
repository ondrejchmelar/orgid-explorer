import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from '@windingtree/wt-ui-react';
import Item from './Item';
import { fields, data } from './mockedData';

class OrgIdTable extends Component {
  render() {
    return (
      <Container className='my-1 '>
        <Table striped bordered hover>
          <thead>
            <tr>
              {
                fields.map(fieldName => (<th>{fieldName}</th>))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map(itemData => <Item {...itemData} />)
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default OrgIdTable;
