import React, { Component } from 'react';
import { Container, Row, Col } from '@windingtree/wt-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrigIdInput from '../components/OrigIdInput';
import LocationMap from './LocationMap';
import MainDescription from './MainDescription';
import OrgIdDescription from './OrgIdDescription';
import Owner from './Owner';
import config from '../config';

class OrgIdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  };

  componentDidMount () {
    const { id } = this.props.match.params;

    fetch(`${config.API_URI}/organizations/${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {   
        const { segments, dateCreated, dateUpdated, orgJsonContent } = data;
        const { hotel, legalEntity, airline } = orgJsonContent;
        this.setState({ segments, dateCreated, dateUpdated, hotel, legalEntity, airline })
      });
  }

  onInputChange = (e) => {    
    this.setState({inputValue: e.target.value})
  }

  render() {
      const { hotel, legalEntity, airline, segments, dateCreated, dateUpdated, inputValue } = this.state;
      const { id } = this.props.match.params;
      const data = hotel || airline;
    return (
      <>
        <Header />
        <Container className="mt-1">
          <h2 className="text-center">Org.Id explorer</h2>
        </Container>
        <OrigIdInput value={inputValue} onChange={this.onInputChange}/>
        <Container className="my-1">
          <Row className="align-self-center">
            <Col className="align-self-center">
              <MainDescription 
                directory={segments}
                id={id}
                created={dateCreated}
                updated={dateUpdated}
              />
            </Col>
          </Row>
          <Row className="my-1">
              <Col md={6} sm={12}>
                {hotel ? <OrgIdDescription data={data} /> : null}
                {legalEntity ? <Owner 
                  name={legalEntity.name}
                  address={legalEntity.address}
                  city={legalEntity.city}
                  countryCode={legalEntity.countryCode}
                  contact={legalEntity.contact}
                  id={legalEntity.id}
                /> : null}
              </Col>
              <Col md={6} sm={12}>
                {data ? <LocationMap data={data} /> : null }
              </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default OrgIdDetails;
