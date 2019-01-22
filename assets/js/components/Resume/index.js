import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav/index";
import Main from "./Main/index";
import Github from "./Github/index";

class Resume extends React.Component {
    render() {
        return (
            <section className="container">
                <Nav locale={this.props.locale} />
                <Switch>
                    <Route
                        exact
                        path="/resume"
                        render={(props) => {
                            return (
                                <Main {...props} locale={this.props.locale} />
                            );
                        }}
                    />
                    <Route
                        path="/resume/github"
                        render={(props) => {
                            return (
                                <Github {...props} locale={this.props.locale} />
                            );
                        }}
                    />
                </Switch>
            </section>
        );
    }
}

export default Resume;
