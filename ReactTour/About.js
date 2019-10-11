import React from "react";
import "./hogwarts.css";

class About extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
    }

    // Renders component based on current state and props
    render() {
        return (
            <div>
<body>
<main>
<h1>About Hogwarts Tours</h1>

 <h3>Hogwarts Tours is a fictional tour company created to teach various aspects of magic</h3>


 <section class="hogwarts-intro">

     <p>
       
         <h3>Core</h3>
     <ol>
                <li>Astronomy</li>
                <li>Charms</li>
                <li>Defence Against the dark arts</li>
                <li>Herbology</li>
                <li>History of Magic</li>
            </ol>
            <h3>Optional</h3>
            <ol>
                <li>Care of Magical Creaters</li>
                <li>Muggle studies</li>
            </ol>
            <h3>Extra Curriclur</h3>
            <ol>
                <li>Quidditch</li>
                <li>Earth Magic</li>
            </ol>

     </p>
 </section>
</main>
</body> 
    </div>
        );
    }
}
export default About;