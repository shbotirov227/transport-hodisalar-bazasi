import React from "react";
import MapChart from './MapChart';
// import { Placemark, withYMaps, YMaps } from "react-yandex-maps";
import Header from "../../containers/Header/Header";

import "./Map.scss";

const Map = () => {
    // const mapData = {
    //     center: [40.2395, 67.9406, 36.2598115],
    //     zoom: 13,
    // };

    // const coordinates = [[54.5101087, 36.2598115]];

    

    return (
        <div className="Map">
            <Header title="Map" />
            {/* <YMaps>
                <Map defaultState={mapData}>
                    {coordinates.map((coordinate) => (
                        <Placemark geometry={coordinate} />
                    ))}
                </Map>
            </YMaps> */}
            <MapChart />
        </div>
    );
};

export default Map;


// 22a61631-109c-4315-988a-adcdc39d14fb =====> api-key-yandex-map