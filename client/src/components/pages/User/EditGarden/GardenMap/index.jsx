import React, { useState, useEffect, useRef } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../../../../store/actions/profil";

import L from "leaflet";
import {
	Map,
	TileLayer,
	Marker,
	Popup,
	Tooltip,
	FeatureGroup,
	GeoJSON,
} from "react-leaflet";
import { divIcon, featureGroup } from "leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import providers from "./providers";
import "./garden-map.scss";
import useGeoLocation from "../../../../../hooks/geolocationHook";

const GardenMap = ({ data }) => {
	const location = useGeoLocation();
	const [userDataLoaded, setUserDataLoaded] = useState(false);
	const [showUser, setShowUser] = useState(false);
	const [mapLayers, setMapLayers] = useState([]);

	const dispatch = useDispatch();
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.down("md"));

	const [center, setCenter] = useState({
		lat: 43.57896855312307,
		lon: 1.4753678441047668,
	});
	const mapRef = useRef();
	const featureGroupRef = useRef();

	const ZOOM_LEVEL = 19;

	const convertDataToFeatureCollection = () => {
		return {
			type: "GeometryCollection",
			geometries: data.map((field) => {
				return {
					type: "Polygon",
					properties: {},
					coordinates: field.shape.coordinates,
				};
			}),
		};
	};

	const showMyLocation = () => {
		if (location.loaded && !location.error) {
			mapRef.current.leafletElement.flyTo(
				[location.coordinates.lat, location.coordinates.lng],
				ZOOM_LEVEL,
				{ animate: true },
			);
			setShowUser(true);
		} else {
			alert(location.error.message);
		}
	};

	const _onCreated = (e) => {
		const { layerType, layer } = e;

		if (layerType === "polygon") {
			const { _feature_type, _leaflet_id } = layer;

			setMapLayers((layers) => [
				...layers,
				{ id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
			]);
		}
	};

	const _onEdited = (e) => {
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
		const {
			layers: { _layers },
		} = e;

		Object.values(_layers).map(({ _leaflet_id }) =>
			setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id)),
		);
	};

	const _onFeatureGroupReady = (ref) => {
		if (data && !userDataLoaded) {
			const leafletFG = ref.leafletElement;
			leafletFG.eachLayer(function (layer) {
				leafletFG.removeLayer(layer);
			});

			let added = [];
			data.forEach((dataPolygonItem) => {
				const leafletLayer = new L.GeoJSON({
					type: "Feature",
					properties: {},
					geometry: convertDataToFeatureCollection(dataPolygonItem),
				});

				leafletLayer.setStyle({
					color: "#ff338b",
					fillColor: "#ff338b",
					weight: 3,
					opacity: 0.8,
					fill: true,
					clickable: true,
				});
				leafletFG.addLayer(leafletLayer.getLayers()[0]);

				added.push({
					id: leafletLayer._leaflet_id,
					latlngs: leafletLayer.getLayers()[0].getLayers()[0].getLatLngs()[0],
				});
			});

			// console.log("added")
			// console.log(added);
			// setUserDataLoaded = true;

			// setMapLayers([...mapLayers, ...added]);
			// } else if (data && userDataLoaded) {
			// const leafletFG = ref.leafletElement;
			// // leafletFG.eachLayer(function (layer) {
			// // leafletFG.removeLayer(layer);
			// // });
			// const leafletLayer = new L.GeoJSON({
			// 	type: "Feature",
			// 	properties: {},
			// 	geometry: convertDataToFeatureCollection(data),
			// });
			// leafletLayer.setStyle({
			// 	color: "#ff3333",
			// 	fillColor: "#ff333380",
			// 	weight: 3,
			// 	opacity: 0.4,
			// 	fill: true,
			// 	clickable: true,
			// });
			// console.log(leafletLayer);
			// leafletFG.addLayer(leafletLayer.getLayers()[0]);
			// // setMapLayers((layers) => [
			// // 	...layers,
			// // 	{ id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
			// // ]);
			// }
		}
	};

	// useEffect(() => {
	// 	console.log("Entered");

	// 	if (featureGroupRef.current) {
	// 		const leafletFG = featureGroupRef.current.leafletElement;
	// 		console.log(leafletFG);

	// 		if (!userDataLoaded) {
	// 			leafletFG.eachLayer(function (layer) {
	// 				leafletFG.removeLayer(layer);
	// 			});

	// 			let added = [];
	// 			data.forEach((dataPolygonItem) => {
	// 				const leafletLayer = new L.GeoJSON({
	// 					type: "Feature",
	// 					properties: {},
	// 					geometry: convertDataToFeatureCollection(dataPolygonItem),
	// 				});

	// 				leafletLayer.setStyle({
	// 					color: "#ff338b",
	// 					fillColor: "#ff338b",
	// 					weight: 3,
	// 					opacity: 0.8,
	// 					fill: true,
	// 					clickable: true,
	// 				});
	// 				leafletFG.addLayer(leafletLayer.getLayers()[0]);

	// 				added.push({
	// 					id: leafletLayer._leaflet_id,
	// 					latlngs: leafletLayer.getLayers()[0].getLayers()[0].getLatLngs()[0],
	// 				});
	// 			});
	// 		}

	// 	}
	// }, [featureGroupRef.current]);

	return (
		<div className="map-container">
			<Map ref={mapRef} className="map" center={center} zoom={ZOOM_LEVEL}>
				<FeatureGroup
					// ref={(el) => {
					// 	if (el) _onFeatureGroupReady(el);
					// }}
					// ref={featureGroupRef}
				>
					<EditControl
						position="topright"
						onCreated={_onCreated}
						onEdited={_onEdited}
						onDeleted={_onDeleted}
						// onFeatureGroupReady={_onFeatureGroupReady}
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
						// edit={{
						// 	edit
						// }}
					/>
					<Popup direction={"top"} interactive={true} opacity={0.8}>
						<div className="PopupContent">
							<h1>Nom : Mon jardin 1</h1>
							<p>
								Espèces contenues :<span>carotte</span>
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
