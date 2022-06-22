import React from "react";
import HeaderNavLogin from "./HeaderNavLogin";
import HeaderNavMenu from "./HeaderNavMenu";

function Header () {
    return (
        <div>
        <HeaderNavLogin/>
        <HeaderNavMenu/>
        </div>
    );
}

export default Header;