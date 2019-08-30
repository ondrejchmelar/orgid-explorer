import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrgIdTable from './OrgIdTable';
import OrigIdInput from './OrigIdInput';
import Filters from './Filters';

class Debugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(2019,0,1),
      endDate: Date.now(),
      selectedDirectory: 'HOTELS'
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
    console.log(eventKey)
    this.setState({
      selectedDirectory: eventKey,
    });
  }

  render() {
    const { startDate, endDate, selectedDirectory } = this.state;
    return (
      <>
        <Header />
        <div className="container mt-1">
          <h2 className="text-center">Org.Id explorer</h2>
        </div>
        <OrigIdInput />
        <Filters 
          startDate={startDate}
          endDate={endDate}
          selectedDirectory={selectedDirectory}
          onStartDateChange={this.onStartDateChange}
          onEndDateChange={this.onEndDateChange}
          onDirectoryChange={this.onDirectoryChange}
        />
        <OrgIdTable />
        <Footer />
      </>
    );
  }
}

export default Debugger;
