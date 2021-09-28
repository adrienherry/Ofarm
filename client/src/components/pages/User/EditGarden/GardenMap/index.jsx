import React, { useState } from "react";

import { Map, TileLayer } from "react-leaflet";
import providers from "./providers";

const GardenMap = () => {
    const [center, setCenter] = useState({ lat: 43.57969, lon: 1.48326 });
    const ZOOM_LEVEL = 19;
	

    return (
			<div>
				<div className="map-container">
					<Map center={center} zoom={ZOOM_LEVEL}>
						<TileLayer
							url={providers.googleMaps.url}
							attribution={providers.googleMaps.attribution}
							maxNativeZoom={20}
							maxZoom={30}
						/>
					</Map>
				</div>
			</div>
		);
};

export default GardenMap;
