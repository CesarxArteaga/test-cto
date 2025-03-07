import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  //   const position: LatLngTuple = [51.505, -0.09];
  return (
    <MapContainer
      style={{
        height: 600,
        width: 600,
      }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}></Marker>

      <Marker position={[51.505, -0.08]}></Marker>

      <Marker position={[51.523, -0.08]}></Marker>
    </MapContainer>
  );
}
