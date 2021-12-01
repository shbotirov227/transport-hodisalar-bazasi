import React, { useState, useEffect } from "react";
import { axios } from 'axios';
import Header from "../../containers/Header/Header";
import "./SettingsPage.scss";



const SettingsPage = () => {

    const [ state, setState ] = useState({
        isFetched: false,
        data: [],
        error: null
    });


    useEffect( () => {
        axios.get('https://api-dtp.yhxbb.uz/api/egov/open_data', {
            params: {
                headers: {
                "Access-Control-Allow-Origin": null,
                "Content-Type": "application/json"
            }
            }
        })
            .then( res => {
                setState({
                    isFetched: true,
                    data: res,
                    error: false
                });
                console.log(res);
            }).catch( err => {
                setState({
                    isFetched: true,
                    data: [],
                    error: err
                });
                console.log(err);
            })
    }, [])

    console.log(state.data);

    return (
        <div className="SettingsPage">
            <Header title="Settings" />
        </div>
    )   

};

export default SettingsPage;
// https://api-dtp.yhxbb.uz/api/egov/open_data