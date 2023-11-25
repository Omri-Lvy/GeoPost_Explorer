import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { Skeleton } from "@mui/material";


export default function Map({ location }) {

    const markerIcon = new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]});

    return (
        location.length > 0 ?
        <MapContainer center={location} zoom={13} style={{ minHeight: '100%', minWidth: '100%', borderBottomLeftRadius: '8px',borderBottomRightRadius: '8px' }}  scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location} icon={markerIcon} />
        </MapContainer> :
            // eslint-disable-next-line react/jsx-no-undef
            <Skeleton variant="rounded" width={'100%'} height={'100%'} sx={{borderBottomLeftRadius: '8px',borderBottomRightRadius: '8px'}} />
    )
}
