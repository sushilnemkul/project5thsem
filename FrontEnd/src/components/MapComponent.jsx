import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix missing marker icons in React
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const DavCollegeMap = () => {
  const davCollegePosition = [27.67473685570626, 85.30881809478721]; // DAV College, Dhobighat

  return (
    <div style={{ height: '650px', width: '850px', paddingLeft: '150px', paddingTop: '90px' }}>
      <MapContainer
        center={davCollegePosition}
        zoom={17}  // Close-up zoom level
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={davCollegePosition}>
          <Popup>
            <b>FishTopia</b><br />
            Dhobighat, Lalitpur, Nepal
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DavCollegeMap;