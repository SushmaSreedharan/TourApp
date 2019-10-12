import React from "react";
import ReactDOM from "react-dom";
import hogwartsLogo from "../images/hogwarts-logo.jpg";
import hogwartsMap from "../images/hogwarts-map.jpg";
import "./hogwarts.css";
import AdminApp from "./AdminApp.js";
import CustomerApp from "./CustomerApp.js";
import GuestApp from "./GuestApp.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "guest"
        }; // We will have "user" and "admin" roles too.
        this.loginAuthentication = this.loginAuthentication.bind(this);
    }
    loginAuthentication(newRole, userInfo) {
    if(newRole == "admin")    {
    console.log("login authentication clicked");
    console.log(userInfo);
    this.setState({role:"admin"});
    }
    else
     this.setState({role:"customer"});
     console.log(userInfo);
      }

    render() {
        let contents = null;
        switch (this.state.role) {
            case "guest":
                contents = <GuestApp loginAuthentication={this.loginAuthentication} />;
                break;
            case "customer":
                contents = <CustomerApp />;
                break;
            case "admin":
                contents = <AdminApp />;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }
        
        return (
            <div>
                {contents}
{/* 
<body>
     <main>
       <h1>Hogwarts tour</h1>
        <h2> <img src={hogwartsLogo} height = "150" width = "150"/>
         </h2>
         <h3>Draco dormiens nunquam titillandus</h3>


         <section class="hogwarts-intro">

             <h1>
     <img src={hogwartsMap} height = "250" width = "550" />

             </h1>
             <p>Hogwarts is in Scotland. The school is depicted as having numerous charms and spells on and around it that make it impossible for a Muggle to locate it. Muggles cannot see the school; rather, they see only ruins and several warnings of danger. The castle's setting is described as having extensive grounds with sloping lawns, flowerbeds and vegetable patches, a loch (called The Black Lake), a large dense forest (called the Forbidden Forest), several greenhouses and other outbuildings, and a full-size Quidditch pitch. There is also an owlery, which houses all the owls owned by the school and those owned by students. Some rooms in the school tend to "move around", and so do the stairs in the grand staircase. Witches and wizards cannot Apparate or Disapparate in Hogwarts grounds, except when the Headmaster lifts the enchantment, whether only in certain areas or for the entire campus, so as to make the school less vulnerable when it serves the headmaster to allow Apparition. Electricity and electronic devices are not found at Hogwarts. In Harry Potter and the Goblet of Fire, Hermione indicates that due to the high levels of magic, "substitutes for magic (that) Muggles use" such as computers, radar and electricity "go haywire" around Hogwarts. Radios however, make an exception. Rowling explains this by saying that the radios are not powered by electricity but by magic.</p>
         </section>
     </main>
</body>  */}
            </div>

         );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
