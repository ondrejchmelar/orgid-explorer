import React from 'react';

import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { Container } from '@windingtree/wt-ui-react';

class LocationMap extends React.PureComponent {
  state = {
    zoom: 16,
  };

  render() {
    const { data } = this.props;
    const { zoom } = this.state;
    const location = data.description ? data.description.location : data.location;
    const { latitude, longitude } = location;
    const position = [latitude, longitude];
    const name = data.description ? data.description.name : data.name;
    // Set path to marker icon
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });

    return (
      <Container className="h-100">
        <Map center={position} zoom={zoom} className="h-100">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="map-popup">
                <h4>{name}</h4>
              </div>
            </Popup>
          </Marker>
        </Map>
      </Container>
    );
  }
}

export default LocationMap;