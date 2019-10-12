import React from "react";
import "./hogwarts.css";
import About from "./About.js";
import Home from "./Home.js";

export default class AdminApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
    this.state = {
       showing:"home"
    };
    }
    handleHomeClick(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({showing: "home"});
    }
    handleCustomersClick(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({showing: "customers"});
    }
    handleAboutClick(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({showing: "about"});
    }
    handleLogoutClick(){
        console.log("logout clicked");
        this.props.logout();
        
    }
    // Renders component based on current state and props
    render() {
        let contents = null;
        switch (this.state.showing) {
            case "home":
                contents = <Home />;
                break;
            case "about":
                contents = <About />;
                break;
            case "customers":
                contents = <h1>Not implemented yet!</h1>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }
        // Any code you like
        let navbar =       <header>
        <nav     className="nav-container">
        <span className="CoName">Hogwarts tour</span>
            <ul>
            <li><a href="#">Tour Management</a></li>
                <li><a onClick={this.handleCustomersClick.bind(this)}>Customer Management</a></li>
                <li><a onClick={this.handleAboutClick.bind(this)}>About Us</a></li>
                <li><a onClick={this.handleHomeClick.bind(this)}>Home</a></li>
                <li><a onClick={this.handleLogoutClick.bind(this)}>Logout</a></li>
            </ul>

        </nav>

    </header>;
        return (
            <div>
            {navbar}
            <body>
            <main>
            {contents}
            </main></body>

    </div> 
    );
    }
}
// export default AdminApp;