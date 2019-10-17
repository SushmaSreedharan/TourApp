import React from "react";
import "../hogwarts.css";
import tourData from "../tour.json";
import TourTable from "../guest/TourTable";

class AdminTour extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            addName:"Just foiling around 3",
            addDate:"Whenever possible",   
            tours : tourData
        }
    }

    addTour(event){
    event.preventDefault();
    console.log();
    this.setState({tours: this.state.tours.concat([{name:this.state.addName, date:this.state.addDate}])});

       }

       textNameChange(event){
       
        this.setState({addName: event.target.value});
           console.log(event.target.value);
           console.log(this.state.addName);
           console.log("input change");
         
      }
      textDateChange(event){
     
        this.setState({addDate: event.target.value});
        console.log(event.target.value);
        console.log("date change");
      }     
      deleteTour(index){
         let subTours = {};
         subTours = this.state.tours;
        
        subTours.splice(index,1);
        //  subTours = this.state.tours.filter((i) => index !== i );
          let toursNew = Object.assign({}, this.state.tours, subTours);
          this.setState({tourData: toursNew});
      }    


    render() {
        return (
            <div>
        <div><h2>Add tour</h2>
                <form id="add-tour">
  <label>
    Name:
    <input type="text" name="name" value={this.state.addNname} onChange={this.textNameChange.bind(this)}/>
  </label>
  <label>
    Dates(s):
    <input type="text" name="name" value={this.state.addDdate} onChange={this.textDateChange.bind(this)}/>
  </label>
  <button id="login-button" onClick={this.addTour.bind(this)} >Add</button>
</form>
</div>
<TourTable tourData={this.state.tours}  deleteTour={this.deleteTour.bind(this)} />
</div>
        );
    }
}

export default AdminTour;