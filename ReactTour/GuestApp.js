import React from "react";
import "./hogwarts.css";
import About from "./About.js";
import Home from "./Home.js";
import hogwartsLogo from "../images/hogwarts-logo.jpg";
import hogwartsMap from "../images/hogwarts-map.jpg";

class GuestApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
        this.state = {
                showing: "home"
        };
    }
    handleHomeClick(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({showing: "home"});
    }
    handleAboutClick(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({showing: "about"});
    }
    handleLoginClick(event) {
        console.log(event);
        console.log(event.target)
        console.log("You pressed a button");
        this.setState({showing: "login"});
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
            case "login":
                contents = <h1>Not implemented yet!</h1>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }

        let navbar = <header>
        <nav className="nav-container">
        <span className="CoName">Hogwarts tour</span>
            <ul>
                <li><a href="#">Coming Tours</a></li>
                <li><a onClick={this.handleLoginClick.bind(this)}>Muggle Login</a></li>
                <li><a href="signup.html">Newsletter signup</a></li>
                <li><a onClick={this.handleAboutClick.bind(this)}>About Us</a></li>
                <li><a onClick={this.handleHomeClick.bind(this)}>Home</a></li>
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
export default GuestApp;