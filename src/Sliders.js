import React from "react"
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import './sliders.css';
import 'bootstrap/dist/css/bootstrap.css';



class Sliders extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      familyMembers: 1,
      numOfDays: 1
    }
  }
  

    
  handleChange = name => (e, value) => {
    this.setState({
      [name]: value 
    });
    let numOfRolls = Math.round((this.state.numOfDays * this.state.familyMembers) / 4.666)
    this.props.handler(numOfRolls)
    this.props.fam(this.state.familyMembers)
    this.props.numOfDays(this.state.numOfDays)
  };
  

render(){  
  const familyIcons = [];
  
  const test = [
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png"/>, 
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Aunt-512.png"/>, 
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Son-512.png"/>,
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Father-512.png"/>,
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"/>,
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Daughter-512.png"/>,
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandmother-512.png"/>,
      <img class="familyIcons" alt="familyIcons" src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Uncle-512.png"/>,
  ]

    
  if (this.state.familyMembers === 1) {
    familyIcons.push(test[0])
  } else if (this.state.familyMembers === 2) {
    familyIcons.push(test[0], test[1])
  } else if (this.state.familyMembers === 3) {
    familyIcons.push(test[0], test[1], test[2])
  } else if (this.state.familyMembers === 4) {
    familyIcons.push(test[0], test[1], test[2], test[3])
  } else if (this.state.familyMembers === 5) {
    familyIcons.push(test[0], test[1], test[2], test[3], test[4])
  } else if (this.state.familyMembers === 6) {
    familyIcons.push(test[0], test[1], test[2], test[3], test[4], test[5])
  } else if (this.state.familyMembers === 7) {
    familyIcons.push(test[0], test[1], test[2], test[3], test[4], test[5], test[6])
  } else if (this.state.familyMembers === 8) {
    familyIcons.push(test[0], test[1], test[2], test[3], test[4], test[5], test[6], test[7])
  }

  const familyMarks = [
      {
        value: 1,
        label: "1"
      },
      {
        value: 2,
        label: "2"
      },
      {
        value: 3,
        label: "3"
      },  
      {
        value: 4,
        label: "4"
      },  
      {
        value: 5,
        label: "5"
      },  
      {
        value: 6,
        label: "6"
      },  
      {
        value: 7,
        label: "7"
      },  
      {
        value: 8,
        label: "8"
      }
    ];
  
  
  const dayMarks= [
    {
      value: 1,
      label: "1 Day"
    },
    {
      value: 14,
      label: "2 Weeks"
    },
    {
      value: 30,
      label: "1 Month"
    },  
    {
      value: 42,
      label: "6 Weeks"
    },  
    {
      value: 60,
      label: "2 Months"
    }
  ];
  
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-5" id="slider1">
          <Typography id="discrete-slider" gutterBottom>
            Family Members:
          </Typography>
          <Slider
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            value={this.state.familyMembers}
            marks={familyMarks}
            min={1}
            max={8}
            onChangeCommitted={this.handleChange("familyMembers")}
            />
          <div id="familyIcons">
            {familyIcons}
          </div>
        </div>
        <div class="col-lg-5" id="slider2">
          <Typography id="discrete-slider" gutterBottom>
            Days in Isolation:
          </Typography>
          <Slider
            defaultValue={1}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={dayMarks}
            min={1}
            max={60}
            onChangeCommitted={this.handleChange("numOfDays")}
          />
          <div id="calendar">
            <span>{this.state.numOfDays}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Sliders
