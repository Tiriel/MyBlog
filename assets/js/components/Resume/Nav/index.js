import React from "react";
import ProfileNav from "./ProfileNav";

class Nav extends React.Component {
    render() {
        return (
            <nav className="profile">
                <ProfileNav locale={this.props.locale} />
            </nav>
        );
    }
}

export default Nav;
