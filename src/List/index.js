/* eslint-disable no-mixed-operators */
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { format, parseISO } from 'date-fns'
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Container } from '@windingtree/wt-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrigIdInput from '../components/OrigIdInput';
import LocationMap from '../components/LocationMap';
import Filters from './Filters';
import { fields } from './mockedData';
import config from '../config';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import styles from './List.module.css';


function linkFormatter(cell, row, enumObject, index) {
  return (
    <LinkContainer to={`orgid/${cell}`} >
      <Button variant="link" className={`${styles['dont-break-out']}`}>
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
      selectedEnvironment: 'mainnet',
      organizationsData: [],
      markers: undefined,
      totalCount: 0,
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

  onEnvironmentChange = (eventKey) => {
    this.setState({
      selectedEnvironment: eventKey,
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

  onLocationChange = (place) => {
    this.setState({
      city: place.formatted_address, 
      location:`${place.geometry.location.lat()},${place.geometry.location.lng()}`
    })
  } 

  parseOrgData = ({address, name, city, segments, dateCreated}) => (
    { address, name, city, segments, dateCreated: format(parseISO(dateCreated), 'yyyy-MM-dd') }
  )

  parseMarkers = (items) => {
    const markers = items.map(({ gpsCoordsLat, gpsCoordsLon, orgJsonContent, name }) => {
        const orgData = orgJsonContent && (orgJsonContent.hotel || orgJsonContent.airline);
        const location = (
          orgData && (orgData.location || (orgData.description && orgData.description.location))
          ) 
          || (gpsCoordsLat && gpsCoordsLon && {
            latitude: gpsCoordsLat,
            longitude: gpsCoordsLon,
          });
        if(!location) return {invalid: true};
        const marker = {};
        marker.position = [location.latitude, location.longitude];
        marker.name = (orgData && ((orgData.description && orgData.description.name) || orgData.name))
          || name || 'Name not provided';
        return marker;
      })
      .filter(({invalid}) => !invalid);
    return markers;
  }

  async componentDidMount() {
    try {
      let qs = this.prepareQS();
      qs += `&limit=10&offset=0`;

      const response = await fetch(`${config.API_URI}/organizations?${qs}`)
      const { items, totalCount } = await response.json();
      const organizationsData = items.map(this.parseOrgData);
      const markers = this.parseMarkers(items);
      this.setState({ organizationsData, markers, totalCount:parseInt(totalCount) });
    } catch (e) {
      console.log(e);
      //
    }
  }

  onApply = async (e) => {
    e.preventDefault();

    let qs = this.prepareQS();
    qs += `&limit=10&offset=0`;
    try {
      const response = await fetch(`${config.API_URI}/organizations?${qs}`);
      const { items, totalCount } = await response.json();
      const organizationsData = items.map(this.parseOrgData);
      const markers = this.parseMarkers(items);
      this.setState({ organizationsData, markers, totalCount:parseInt(totalCount) });
    } catch (e) { 
      console.log(e)
    }
  }

  prepareQS = () => {
    const { 
      selectedDirectory, startDate, endDate,sortOrder, sortName, location, selectedEnvironment 
    } = this.state;

    let qs = '';
    qs += `environment=${selectedEnvironment.toLowerCase()}`;
    qs += `&segments=${selectedDirectory.toLowerCase()}`;
    qs += startDate ? `&dateCreatedFrom=${format(startDate, 'yyyy-MM-dd')}`:'';
    qs += endDate ? `&dateCreatedTo=${format(endDate, 'yyyy-MM-dd')}` : '';
    qs += location ? `&location=${location}:200&sortByDistance=${location}` : '';
    qs += !location && sortOrder && sortName ? `&sortingField=${sortOrder === 'desc' ? '-' : ''}${sortName}` : '';
    
    return qs;
  }

  onPageChange = async (page, sizePerPage) => {
    let qs = this.prepareQS();
    qs += `&limit=${sizePerPage}&offset=${sizePerPage * (page - 1)}`;
    try {
      const response = await fetch(`${config.API_URI}/organizations?${qs}`);
      const { items, totalCount } = await response.json();
      const organizationsData = items.map(this.parseOrgData);
      const markers = this.parseMarkers(items);
      this.setState({ organizationsData, markers, totalCount:parseInt(totalCount) });
    } catch (e) { 
      console.log(e)
    }
  }

  render() {
    const { 
      startDate, endDate, selectedDirectory, organizationsData, inputValue, markers,
      selectedEnvironment, totalCount,
    } = this.state;

    const tableOptions = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
      noDataText: 'No data to display',
      sizePerPage: 10,
      sizePerPageList: [ 10 ], 
      pageStartIndex: 1, 
      prePage: 'Prev',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      paginationShowsTotal: true,
      onPageChange: this.onPageChange,
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
          onEnvironmentChange={this.onEnvironmentChange}
          selectedEnvironment={selectedEnvironment}
        />
        <Container className="my-1">
          <BootstrapTable
            ref='table'
            options={tableOptions}
            data={organizationsData}
            version='4'
            striped
            hover 
            pagination
            fetchInfo={{dataTotalSize: totalCount}}
            remote={true}
            >
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
                    width={display === 'company' ? '150' : '100'}
                  >
                    {display}
                  </TableHeaderColumn>
                )})}
          </BootstrapTable>
        </Container>
        <Container className={`my-1 min-vh-100 ${styles['fixedh-600']}`}>
          <LocationMap markers={markers} zoom={2} center={[0,0]}/>
        </Container>
        <Footer />
      </>
    );
  }
}

export default List;
