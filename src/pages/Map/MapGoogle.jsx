import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const api_key = "AIzaSyCliwg3-Nq1Q_L9GFgg131MKkse_A4Lvyg";

const MapGoogle = () => {
    const [state, setState] = useState({
        isFetched: false,
        data: [],
        error: null,
    });

    useEffect(() => {
        axios
            .get(
                `https://maps.googleapis.com/maps/api/js?key=${api_key}`
            )
            .then((data) => {
                setState({
                    isFetched: true,
                    data: data,
                    error: false,
                });
                console.log(data.json());
                
            })
            .catch((err) => {
                setState({
                    isFetched: true,
                    data: [],
                    error: err,
                });
                console.log(err);
            });
    }, []);

    return (
        <div className="map-google">
           {
               state.isFetched ? (
                   <h1>DATA KELDIIIIIIIII UUURRRRAAAAAAAAAAAAAAAA</h1>
                   
               ) : (
                   <h1>LOADDDFOOONNG</h1>
               )
           }
        </div>
    );
};

export default MapGoogle;
