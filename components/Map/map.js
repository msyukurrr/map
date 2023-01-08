import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from "../../styles/Home.module.css"
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map(){
    const position = [49.28594, -123.11129]

    const polyline = [
        [49.28594, -123.11129],
        [49.2856, -123.1202],
        [49.2833, -123.1161],
        [49.278856, -123.108513],
        [49.2732, -123.1003],
        [49.2626, -123.0692],
        [49.2443, -123.0461],
        [49.2384, -123.0318],
        [49.22967, -123.012376],
        [49.2258, -123.0039],
        [49.2123, -122.9592],
        [49.2000, -122.9490],
        [49.2015, -122.9126],
        [42.4895, -83.1446],
        [41.3130, -81.9468],

    ]

    const purpleOption = { color: 'purple'}

    return(
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Skytrain. <br/> Waterfront. 
                </Popup>
            </Marker>

            <Marker position={[49.2856, -123.1202]}>
                <Popup></Popup>
            </Marker>

            <Marker position={[49.2833, -123.1161]}>
                <Popup></Popup>
            </Marker>

            <Marker position={[49.278856, -123.108513]}>
                <Popup></Popup>
            </Marker>

            <Marker position={[49.2732, -123.1003]}>
                <Popup></Popup>
            </Marker>

            

            <Polyline pathOptions={purpleOption} positions={polyline}/>


        </MapContainer>
    )
}