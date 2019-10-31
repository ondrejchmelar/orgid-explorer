import React, { Component } from 'react';
import { Container, Row, Col } from '@windingtree/wt-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrigIdInput from '../components/OrigIdInput';
import LocationMap from '../components/LocationMap';
import MainDescription from './MainDescription';
import OrgIdDescription from './OrgIdDescription';
import Owner from './Owner';
import config from '../config';
import styles from './styles.module.css';

class OrgIdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  };

  async componentDidMount () {
    const { id } = this.props.match.params;
    this.fetchData(id);
  }
  
  parseMarker = (orgData, gpsCoordsLat, gpsCoordsLon, name) => {
    const location = (
      orgData && (orgData.location || (orgData.description && orgData.description.location)))
      || ( gpsCoordsLat && gpsCoordsLon && {
        latitude: gpsCoordsLat,
        longitude: gpsCoordsLon,
      });
    if (!location) return null;
    const marker = {};
    marker.position = [location.latitude, location.longitude];
    marker.name = (orgData && ((orgData.description && orgData.description.name) || orgData.name))
      || name || 'Name not provided';
    return marker;
  }

  onInputChange = (e) => {    
    this.setState({inputValue: e.target.value})
  }

  onInputClick = async () => {    
    const { inputValue } = this.state;
    this.fetchData(inputValue);
  }

  fetchData = async (orgId) => {
    try {
      const response = await fetch(`${config.API_URI}/organizations/${orgId}`);
      if(response.status === 404) return;
      const data = await response.json();
      const {
        segments, dateCreated, dateUpdated, orgJsonContent, owner, name, environment, lifDepositValue,
      } = data;
      const { hotel, legalEntity, airline } = orgJsonContent;
      const orgData = hotel || airline;

      const marker = this.parseMarker(orgData);
      this.setState({ 
        markers: [marker], environment, segments, dateCreated, dateUpdated, orgData, legalEntity, owner,
        name, lifDepositValue,
      })
    } catch (e) {
      console.log(e)
      //
    }
  }

  render() {
    const { orgData, legalEntity, segments, dateCreated, dateUpdated, inputValue, owner, name,
      environment, markers, lifDepositValue,
    } = this.state;
    const { id } = this.props.match.params;
    return (
      <>
        <Header />
        <Container className="mt-3">
          <h2 className="text-center text-uppercase">Org.Id explorer</h2>
        </Container>
        <OrigIdInput value={inputValue} onChange={this.onInputChange} onClick={this.onInputClick}/>
        <Container className="my-1">
          <Row className="align-self-center">
            <Col className="align-self-center">
              <MainDescription 
                directory={segments}
                id={id}
                created={dateCreated}
                updated={dateUpdated}
                environment={environment}
                lifDepositValue={lifDepositValue}
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
                    environment={environment}
                  /> : null}
                </Col>
                <Col md={6} sm={12} className={`${styles['fixedh-600']}`}>
                  <LocationMap markers={markers} center={markers[0] ? markers[0].position : [0,0]}/>
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
