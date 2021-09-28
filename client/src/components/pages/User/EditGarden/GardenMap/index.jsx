import React, { useState, useEffect, useRef } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../../../../store/actions/profil";

import {
	Map,
	TileLayer,
	Marker,
	Popup,
	Tooltip,
	FeatureGroup,
} from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import providers from "./providers";
import "./garden-map.scss";
import useGeoLocation from "../../../../../hooks/geolocationHook";
// const carrotMarker = divIcon({
// 	html: renderToStaticMarkup(<i className="fa-solid fa-carrot"></i>),
// 	iconSize: [34, 34],
// 	iconAnchor: [17, 35],
// 	popupAnchor: [17, -36],
// 	className:'carrotIcon'
// });

const GardenMap = () => {
	const location = useGeoLocation();
	const [showUser, setShowUser] = useState(false);

	const dispatch = useDispatch();
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.down("md"));

	const [center, setCenter] = useState({ lat: 46.57969, lon: 1.48326 });
	const mapRef = useRef();
	const ZOOM_LEVEL = 19;

	const showMyLocation = () => {
		if (location.loaded && !location.error) {
			mapRef.current.leafletElement.flyTo(
				[location.coordinates.lat, location.coordinates.lng],
				ZOOM_LEVEL,
				{ animate: true },
			);
			console.log(location.current);
			setShowUser(true);
		} else {
			alert(location.error.message);
		}
	};

	return (
		<div className="map-container">
			<Map ref={mapRef} className="map" center={center} zoom={ZOOM_LEVEL}>
				<TileLayer
					url={providers.googleMaps.url}
					attribution={providers.googleMaps.attribution}
					maxNativeZoom={19}
					maxZoom={25}
				/>
				{showUser && location.loaded && location.error && 
				<Marker position={
				center
					//location.coordinates.lat, location.coordinates.lng
				}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				} 
			</Map>

			<div>
				<button onClick={showMyLocation}>
					Locate me and let's start planting some shit!
				</button>
			</div>
		</div>
	);
};

export default GardenMap;
