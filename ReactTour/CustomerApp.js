import React from "react";
import "./hogwarts.css";

class CustomerApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
    this.state = {
        role: "customer"
    };
    }

    // Renders component based on current state and props
    render() {
        // Any code you like
        return (
            <div>
            <header>

            <nav     className="nav-container">
            
    
                <span className="CoName">Hogwarts tour</span>
                <ul>
                    <li><a href="#">Coming Tours</a></li>
                    <li><a href="#">My tours</a></li>
                    <li><a href="signup.html">About Us</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
    
            </nav>
    
        </header>
        </div>
        );
    }
}
export default CustomerApp;