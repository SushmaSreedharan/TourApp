import React from "react";
import "./hogwarts.css";
class GuestApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
        this.state = {
            role: "guest"
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
                    <li><a href="#">Muggle Login</a></li>
                    <li><a href="signup.html">Newsletter signup</a></li>
                   
                    <li><a href="#">About Us</a></li>
                    <li><a href="signup.html">Home</a></li>
                </ul>
    
            </nav>
    
        </header>
        </div>
        );
    }
}
export default GuestApp;