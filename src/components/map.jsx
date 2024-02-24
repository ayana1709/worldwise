/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../context/CitiesContext";
import City from "./City";
function Map() {
  const [mapPosition, setMapPostion] = useState([40, 0]);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  // setMapPostion();
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        // center={mapPosition}
        center={[mapLat, mapLng]}
        zoom={6}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
