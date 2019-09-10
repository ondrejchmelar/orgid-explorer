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

  async componentDidMount () {
    const { id } = this.props.match.params;
    try {
      const response = await fetch(`${config.API_URI}/organizations/${id}`);
      if(response.status === 404) return;
      const data = await response.json();
      const { segments, dateCreated, dateUpdated, orgJsonContent, owner, name } = data;
      const { hotel, legalEntity, airline } = orgJsonContent;
      const orgData = hotel || airline;
      const location = orgData && ( orgData.location || (orgData.description && orgData.description.location));

      this.setState({ segments, dateCreated, dateUpdated, orgData, legalEntity, owner, name, location })
    } catch (e) {
      //
    }
  }
  

  onInputChange = (e) => {    
    this.setState({inputValue: e.target.value})
  }

  render() {
    const { orgData, legalEntity, segments, dateCreated, dateUpdated, inputValue, owner, name,
      location,
    } = this.state;
    const { id } = this.props.match.params;
    return (
      <>
        <Header />
        <Container className="mt-3">
          <h2 className="text-center text-uppercase">Org.Id explorer</h2>
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
          { !dateCreated ? null
            : <Row className="my-1">
                <Col md={6} sm={12}>
                  {orgData ? <OrgIdDescription orgData={orgData} name={name}/> : null}
                  {legalEntity ? <Owner 
                    name={legalEntity.name}
                    address={legalEntity.address}
                    city={legalEntity.city}
                    countryCode={legalEntity.countryCode}
                    contact={legalEntity.contact}
                    id={owner}
                  /> : null}
                </Col>
                <Col md={6} sm={12}>
                  <LocationMap orgData={orgData} location={location}/>
                </Col>
            </Row>
          }
        </Container>
        <Footer />
      </>
    );
  }
}

export default OrgIdDetails;
