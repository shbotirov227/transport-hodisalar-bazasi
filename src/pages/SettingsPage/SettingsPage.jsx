import React, {  useEffect } from "react";
import axios from "./axios";
import Header from "../../containers/Header/Header";
import "./SettingsPage.scss";

const SettingsPage = () => {
    // const [state, setState] = useState({
    //     isFetched: false,
    //     data: [],
    //     error: null,
    // });

    // state = {
    //     isFetched: false,
    //     data: [],
    //     error: null
    // }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("/open_data", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Credentials": true,
                    "X-Content-Type-Options": "nosniff",
                    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                    "Content-Type": "application/json",
                },
            });
            console.log(request);
            return request;
        }

        fetchData();
    }, []);

    // console.log(state.data);

    return (
        <div className="SettingsPage">
            <Header title="Settings" />

            <h1>SettingsPage</h1>
        </div>
    );
};

export default SettingsPage;
// https://api-dtp.yhxbb.uz/api/egov/open_data
