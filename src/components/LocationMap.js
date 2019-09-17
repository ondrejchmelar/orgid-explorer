import React from 'react';

import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

export const defaultIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
})

class LocationMap extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      zoom: props.zoom || 16,
      center: props.center || [0,0],
    };
  }

  render() {
    const { markers } = this.props;
    const { zoom, center } = this.state;
    return (
        <Map center={center} zoom={zoom} className="h-100">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {
            markers && markers[0] && markers.map(({ position, name }, i) => (
              <Marker position={position} icon={defaultIcon} key={`${position}${i}`}>
                <Popup>
                  <div className="map-popup">
                    <h4>{name}</h4>
                  </div>
                </Popup>
              </Marker>
            ))
          }
        </Map>
    );
  }
}

export default LocationMap;