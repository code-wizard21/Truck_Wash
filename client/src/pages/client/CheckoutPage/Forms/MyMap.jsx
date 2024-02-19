import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = (props) => {
  const { location1, location2 } = props;

  // Assuming location1 and location2 are objects with { lat, lng }
  const position1 = [location1.lat, location1.lng];
  const position2 = [location2.lat, location2.lng];

  return (
    <MapContainer
      center={position1}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position1}>
        <Popup>
          Location 1: {location1.lat}, {location1.lng}
        </Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>
          Location 2: {location2.lat}, {location2.lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;