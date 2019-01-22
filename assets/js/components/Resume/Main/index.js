import React from "react";
import MainBanner from "./MainBanner";
import MainExp from "./Experience/index";
import MainEd from "./Education/index";
import MainOther from "./Others/index";

class Main extends React.Component {
    render() {
        return (
            <section className="main container">
                <MainBanner locale={this.props.locale} />
                <MainExp locale={this.props.locale} />
                <MainEd locale={this.props.locale} />
                <MainOther locale={this.props.locale} />
            </section>
        );
    }
}

export default Main;
