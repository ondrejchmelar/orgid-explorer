import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrigIdInput from '../components/OrigIdInput';
import Filters from './Filters';
import { fields } from './mockedData';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Container from '@windingtree/wt-ui-react/lib/components/layout/Container';
import config from '../config';

const parseDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`

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

  async componentDidMount() {
    try {
      const response = await fetch(`${config.API_URI}/organizations`)
      const { items } = await response.json();
      const organizationsData = items.map(
        ({address, name, city, segments, dateCreated}) => (
          {address, name, city, segments, dateCreated}
        ))
      this.setState({ organizationsData })
    } catch (e) {
      console.log(e);
    }
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

  onApply = async (e) => {
    e.preventDefault();
    const { selectedDirectory, startDate, endDate,sortOrder, sortName } = this.state;

    const segment = `segment=${selectedDirectory}`;
    const dateCreatedFrom = `dateCreatedFrom=${parseDate(startDate)}`
    const dateCreatedTo = `dateCreatedTo=${parseDate(endDate)}`
    const sortingOrder = sortOrder === 'desc' ? '-' : '';
    const sortingField = `sortingField=${sortingOrder}${sortName}`;

    try {
    const response = await fetch(`${config.API_URI}/organizations?${segment}&${dateCreatedFrom}&${dateCreatedTo}&${sortingField}`)
    const { items } = await response.json();
      const organizationsData = items.map(
        ({address, name, city, segments, dateCreated}) => (
          {address, name, city, segments, dateCreated}
        ))
      this.setState({ organizationsData })
    } catch (e){ 
      console.log(e);
    }
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
        <Container className="mt-1">
          <h2 className="text-center">Org.Id explorer</h2>
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
              {fields.map(({display, fieldName}) => (
                <TableHeaderColumn 
                  isKey={fieldName === 'address'}
                  dataField={fieldName} 
                  key={fieldName}
                  dataSort={ true }>
                  {display}
                </TableHeaderColumn>
              ))}
          </BootstrapTable>
        </Container>
        <Footer />
      </>
    );
  }
}

export default List;
