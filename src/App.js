import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";  
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";

import "./assets/main.scss";
import Sidebar from "./containers/Sidebar/Sidebar";
import SettingsPage from './pages/SettingsPage/SettingsPage';
import SignIn from "./pages/SignIn/SignIn";
import Statistics from "./pages/Statistics/Statistics";

function App() {

    let fetched = axios.get("https://api-dtp.yhxbb.uz/api/egov/open_data");
    fetched.then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))

    return (
        <div className="App container">
            <Router>
                <Sidebar />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
// https://api-dtp.yhxbb.uz/api/egov/open_data
