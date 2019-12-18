"use strict";

class ReactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false
        };
    }
    render() {
        return (
            <NavBar />
        );
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navState: "navPageTop"
        };
    }
    render() {
        return (
            <div className={ this.state.navState }>
                <NavLogo navState={ this.state.navState } />
                <NavLabel label="Events" navState={ this.state.navState } />
                <NavLabel label="Projects" navState={ this.state.navState } />
                <NavLabel label="About Us" navState={ this.state.navState } />
                <NavLabel label="Get Involved" navState={ this.state.navState } />
                <NavLabel label="Join" navState={ this.state.navState } />
            </div>
        );
    }
}

class NavLogo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <img className={ this.props.navState + "Logo" } src="img/logos/finalogo-light.png" />
        );
    }
}

class NavLabel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className={ this.props.navState + "Label" }>
                {this.props.label}
            </span>
        );
    }
}

ReactDOM.render(
    <ReactApp />,
    document.getElementById("reactApp")
);