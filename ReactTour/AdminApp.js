import React from "react";
import "./hogwarts.css";

export default class AdminApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
        this.state = {
            role: "admin"
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
            <li><a href="#">Tour Management</a></li>
                <li><a href="#">Customer Management</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="signup.html">Home</a></li>
                <li><a href="#">Logout</a></li>
            </ul>

        </nav>

    </header>
    </div>
    );
    }
}
// export default AdminApp;