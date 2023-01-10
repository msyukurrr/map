import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from "../../styles/Home.module.css";
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';
import { getLeadingCommentRanges } from 'typescript';


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
        [49.2201, -122.9885],
        [49.2123, -122.9592],
        [49.2000, -122.9490],
        [49.2015, -122.9126],
        [49.2048, -122.9061],
        [49.2247, -122.8894],
        [49.23322, -122.88283],
        [49.24846, -122.89702],
        [49.25337, -122.91815],
    ]

    const polyline2 = [
        [49.2048, -122.9061],
        [49.2044, -122.8743],
        [49.1990, -122.8507],
        [49.1896, -122.8480],
        [49.1827, -122.8446],
    ]

    const leafleticon = L.icon ({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3943/3943971.png',
        iconSize: [40,40],
        iconAnchor: [20,40]
    })

    const colorOption = { color: '#3d405b'}

    return(
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={leafleticon}>
                <Popup>
                Waterfront Station
                <br/>
                Expo Line, Canada Line, SeaBus, and West Coast Express
                </Popup>
            </Marker>

            <Marker position={[49.2856, -123.1202]} icon={leafleticon}>
                <Popup>
                    Burrard Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2833, -123.1161]} icon={leafleticon}>
                <Popup>
                    Granville Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.278856, -123.108513]} icon={leafleticon}>
                <Popup>
                    Stadium-Chinatown Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2732, -123.1003]} icon={leafleticon}>
                <Popup>
                    Main Street-Science World Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2626, -123.0692]} icon={leafleticon}>
                <Popup>
                    Commercial-Broadway Station
                    <br/>
                    Expo Line and Millennimum Line
                </Popup>
            </Marker>

            <Marker position={[49.2443, -123.0461]} icon={leafleticon}>
                <Popup>
                    29th Avenue Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2384, -123.0318]} icon={leafleticon}>
                <Popup>
                    Joyce-Collingwood Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.22967, -123.012376]} icon={leafleticon}>
                <Popup>
                    Patterson Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2258, -123.0039]} icon={leafleticon}>
                <Popup>
                    Metrotown Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2201, -122.9885]} icon={leafleticon}>
                <Popup>
                    Royal Oak Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2123, -122.9592]} icon={leafleticon}>
                <Popup>
                    Edmonds Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>


            <Marker position={[49.2000, -122.9490]} icon={leafleticon}>
                <Popup>
                    22nd Street Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2015, -122.9126]} icon={leafleticon}>
                <Popup>
                    New Westminster Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2048, -122.9061]} icon={leafleticon}>
                <Popup>
                    Columbia Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.2247, -122.8894]} icon={leafleticon}>
                <Popup>
                    Sapperton Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.23322, -122.88283]} icon={leafleticon}>
                <Popup>
                    Braid Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.24846, -122.89702]} icon={leafleticon}>
                <Popup>
                    Lougheed Town Centre Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.25337, -122.91815]} icon={leafleticon}>
                <Popup>
                    Production Way-University Station
                    <br/>
                    Expo Line and Millennimum Line
                </Popup>
            </Marker>

            <Marker position={[49.2044, -122.8743]} icon={leafleticon}>
                <Popup>
                    Scott Road Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.1990, -122.8507]} icon={leafleticon}>
                <Popup>
                    Gateway Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.1896, -122.8480]} icon={leafleticon}>
                <Popup>
                    Surrey Central Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Marker position={[49.1827, -122.8446]} icon={leafleticon}>
                <Popup>
                    King George Station
                    <br/>
                    Expo Line
                </Popup>
            </Marker>

            <Polyline pathOptions={colorOption} positions={polyline}/>
            <Polyline pathOptions={colorOption} positions={polyline2}/>


        </MapContainer>
    )
}