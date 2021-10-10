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

const GardenMap = () => {
	const location = useGeoLocation();
	const [showUser, setShowUser] = useState(false);
	const [mapLayers, setMapLayers] = useState([]);

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

	const _onCreated = (e) => {
		const { layerType, layer } = e;

		console.log(e);
		if (layerType === "polygon") {
			const { _feature_type, _leaflet_id } = layer;

			console.log(layer);
			// var popup = <Tooltip>Some content for my polygon</Tooltip>;
			// layer.bindTooltip(popup);
			// console.log(popup);
			setMapLayers((layers) => [
				...layers,
				{ id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
			]);
		}
	};

	const _onEdited = (e) => {
		console.log(e);

		const {
			layers: { _layers },
		} = e;

		Object.values(_layers).map(({ _leaflet_id, editing }) => {
			setMapLayers((layers) =>
				layers.map((l) =>
					l.id === _leaflet_id
						? { ...l, latLngs: { ...editing.latlngs[0] } }
						: l,
				),
			);
		});
	};

	const _onDeleted = (e) => {
		console.log(e);

		const {
			layers: { _layers },
		} = e;

		Object.values(_layers).map(({ _leaflet_id }) =>
			setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id)),
		);
	};

	return (
		<div className="map-container">
			<Map
				ref={mapRef}
				className="map"
				center={center}
				zoom={ZOOM_LEVEL}
				// onDrawStart={}
			>
				<FeatureGroup>
					<EditControl
						position="topright"
						onCreated={_onCreated}
						onEdited={_onEdited}
						onDeleted={_onDeleted}
						// onEachFeature={_onEachFeature}
						draw={{
							metric: true,
							circle: false,
							circlemarker: false,
							polyline: false,
							polygon: {
								shapeOptions: {
									stroke: true,
									color: "#ff3333",
									fillColor: "#ff333380",
									weight: 3,
									opacity: 0.4,
									fill: true,
									clickable: true,
								},
								// showArea: true,
								showLength: true,
							},
						}}
					/>
					<Popup
						direction={"top"}
						interactive={true}
						opacity={0.8}
					>
						<div className="PopupContent">
							<h1>Nom : Mon jardin 1</h1>
							<p>
								Espèces contenues :
								<span>carotte</span>
								<span>poireau</span>
								<span>asperge</span>
							</p>
						</div>
					</Popup>
				</FeatureGroup>
				<TileLayer
					url={providers.mapTiler.url}
					attribution={providers.mapTiler.attribution}
					maxNativeZoom={19}
					maxZoom={25}
				/>
				{showUser && location.loaded && location.error && (
					<Marker
						position={
							center
							//location.coordinates.lat, location.coordinates.lng
						}
					>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				)}
			</Map>

			<div>
				<button onClick={showMyLocation}>
					Locate me and let's start planting some shit!
				</button>

				<textarea value={JSON.stringify(mapLayers, 0, 2)}></textarea>
			</div>
		</div>
	);
};

export default GardenMap;
