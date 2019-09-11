import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { format, parseISO } from 'date-fns'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from '@windingtree/wt-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrigIdInput from '../components/OrigIdInput';
import Filters from './Filters';
import { fields } from './mockedData';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Container from '@windingtree/wt-ui-react/lib/components/layout/Container';
import config from '../config';

function linkFormatter(cell, row, enumObject, index) {
  return (
    <LinkContainer to={`orgid/${cell}`} >
      <Button variant="link">
        {cell}
      </Button>
    </LinkContainer>
  );
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      startDate: new Date(2019,0,1),
      endDate: new Date(Date.now()),
      selectedDirectory: 'HOTELS',
      organizationsData: []
    };
  }

  onStartDateChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  onEndDateChange = (date) => {
    this.setState({
      endDate: date
    });
  }

  onDirectoryChange = (eventKey) => {
    this.setState({
      selectedDirectory: eventKey,
    });
  }

  onSortChange = (sortName, sortOrder) => {
    this.setState({
      sortName,
      sortOrder
    });
  }

  onInputChange = (e) => {    
    this.setState({inputValue: e.target.value})
  }

  onLocationChange = (e) => {    
    this.setState({location: e.target.value})
  } 

  parseOrgData = ({address, name, city, segments, dateCreated}) => (
    { address, name, city, segments, dateCreated: format(parseISO(dateCreated), 'yyyy-MM-dd') }
  )

  async componentDidMount() {
    try {
      const response = await fetch(`${config.API_URI}/organizations`)
      const { items } = await response.json();
      const organizationsData = items.map(this.parseOrgData);
      this.setState({ organizationsData });
    } catch (e) {
      //
    }
  }

  onApply = async (e) => {
    e.preventDefault();
    const { selectedDirectory, startDate, endDate,sortOrder, sortName, location } = this.state;
    let qs = '';
    qs += `segments=${selectedDirectory.toLocaleLowerCase()}`;
    qs += startDate ? `&dateCreatedFrom=${format(startDate, 'yyyy-MM-dd')}`:'';
    qs += endDate ? `&dateCreatedTo=${format(endDate, 'yyyy-MM-dd')}` : '';
    qs += location ? `&location=${location}:200&sortByDistance=${location}` : '';
    qs += !location && sortOrder && sortName ? `&sortingField=${sortOrder === 'desc' ? '-' : ''}${sortName}` : '';
    
    try {
      const response = await fetch(`${config.API_URI}/organizations?${qs}`);
      const { items } = await response.json();
      const organizationsData = items.map(this.parseOrgData);
      this.setState({ organizationsData });
    } catch (e){ 
      //
    }
  }


  render() {
    const { startDate, endDate, selectedDirectory, organizationsData, inputValue } = this.state;
    const tableOptions = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: 'No data to display'
    }
    return (
      <>
        <Header />
        <Container className="mt-3">
          <h2 className="text-center text-uppercase">Org.Id explorer</h2>
        </Container>
        <OrigIdInput value={inputValue} onChange={this.onInputChange}/>
        <Filters 
          startDate={startDate}
          endDate={endDate}
          selectedDirectory={selectedDirectory}
          onStartDateChange={this.onStartDateChange}
          onEndDateChange={this.onEndDateChange}
          onDirectoryChange={this.onDirectoryChange}
          onApply={this.onApply}
          onLocationChange={this.onLocationChange}
        />
        <Container className="my-1">
          <BootstrapTable
            ref='table'
            options={tableOptions}
            data={organizationsData}
            version='4'
            striped
            hover 
            pagination>
              <TableHeaderColumn
                  dataAlign='center'
                  isKey={true}
                  dataFormat={linkFormatter}
                  width='470'                 
                  dataField='address' 
                  key='address'
                  dataSort={true}
                >
                  ORG.ID
                </TableHeaderColumn>
              {fields.map(({display, fieldName}) => {
                if (fieldName === 'address') return null
                return (
                  <TableHeaderColumn
                    dataAlign='center'
                    dataField={fieldName} 
                    key={fieldName}
                    dataSort={true}
                  >
                    {display}
                  </TableHeaderColumn>
                )})}
          </BootstrapTable>
        </Container>
        <Footer />
      </>
    );
  }
}

export default List;
