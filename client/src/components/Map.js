import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NHLgeojsonData from '../GeoJson/NHLGeoJson';
import SwissgeojsonData from '../GeoJson/SwissGeoJson';
import KontinentalgeojsonData from '../GeoJson/KontinentalGeoJson';
import AHLgeojsonData from '../GeoJson/AHLGeoJson';  // Import AHL GeoJSON
import OHLgeojsonData from '../GeoJson/OHLGeoJson';  // Import OHL GeoJSON
import '../styles/Map.css';

import L from 'leaflet';

// Fix for default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create a custom red icon for the marker
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const Map = () => {
  const [selectedLeague, setSelectedLeague] = useState('major');

  const majorLeagues = [
    { name: 'NHL', data: NHLgeojsonData, color: 'black', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/05_NHL_Shield.svg' },
    { name: 'Swiss National League', data: SwissgeojsonData, color: 'red', logo: 'https://upload.wikimedia.org/wikipedia/en/0/00/National_League.png' },
    { name: 'KHL', data: KontinentalgeojsonData, color: 'blue', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/KHL_logo_shield_2016.svg' },
  ];

  const minorLeagues = [
    { name: 'AHL', data: AHLgeojsonData, color: 'green', logo: 'https://upload.wikimedia.org/wikipedia/en/e/ea/AmericanHockeyLeaguelogo.svg' },
    { name: 'OHL', data: OHLgeojsonData, color: 'orange', logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/OHL_Logo.svg' },
  ];

  // Function to render GeoJSON with popup including team logos
  const renderGeoJSONWithLogos = (league) => (
    <GeoJSON
      data={league.data}
      style={{ color: league.color, weight: 2, opacity: 0.7, fillOpacity: 0.4 }}
      onEachFeature={(feature, layer) => {
        if (feature.properties && feature.properties.popupContent && feature.properties.logo) {
          layer.bindPopup(
            `<div style="text-align:center;">
               <img src="${feature.properties.logo}" alt="${feature.properties.name} Logo" class="logo-size" /><br />
               ${feature.properties.popupContent}
             </div>`
          );
        } else if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        }
      }}
    />
  );

  return (
    <>
      <div className="league-selector">
        <select 
          value={selectedLeague} 
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="major">Major Leagues</option>
          <option value="minor">Minor Leagues</option>
        </select>
      </div>
      <MapContainer
        center={[45.4960, -73.5693]}
        zoom={4} 
        style={{ height: "100vh", width: "100%" }}
        minZoom={3}
        maxZoom={12}
        maxBounds={[[-90, -170], [90, 190]]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {selectedLeague === 'major' && (
          <LayersControl position="topright">
            {majorLeagues.map((league) => (
              <LayersControl.Overlay key={league.name} name={league.name}>
                {renderGeoJSONWithLogos(league)}
              </LayersControl.Overlay>
            ))}
          <Marker position={[45.4960, -73.5693]} icon={redIcon}>
              <Popup className='blue-popup'>
                Centre Bell - Home of the Habs!
              </Popup>
            </Marker>
          </LayersControl>
        )}

        {selectedLeague === 'minor' && (
          <LayersControl position="topright">
            {minorLeagues.map((league) => (
              <LayersControl.Overlay key={league.name} name={league.name}>
                {renderGeoJSONWithLogos(league)}
              </LayersControl.Overlay>
            ))}
          </LayersControl>
        )}

      </MapContainer>
    </>
  );
}

export default Map;
