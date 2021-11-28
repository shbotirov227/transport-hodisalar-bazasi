import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = () => {

    return (
        <div className="MapChart">
            <ComposableMap projection="geoAlbers" width={200} height={200}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                // geography={geo}
                                fill="#DDD"
                                stroke="#FFF"
                            />
                        ))
                    }
                </Geographies>
                <Marker coordinates={[-74.006, 40.7128]}>
                    <circle r={10} fill="#F53" />
                </Marker>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
