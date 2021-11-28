import React from "react";
import {
    BellIcon,
    SettingIcon,
    UserIcon,
    SearchIcon,
} from "../../assets/icons/icons";

import "./Header.scss";

const Header = ({title}) => {
    return (
        <div className="Header">
            <h3 className="Header-title">{title}</h3>
            <div className="Header-search">
                <span className="search-icon">
                    <SearchIcon />
                </span>
                <input
                    className="Header-input"
                    type="text"
                    placeholder="Type here..."
                />

                <button className="Header-btn" href="/">
                    <UserIcon />
                    Sign in
                </button>

                <button className="Header-btn">
                    <SettingIcon />
                </button>

                <button className="Header-btn">
                    <BellIcon />
                </button>
            </div>
        </div>
    );
};

export default Header;
