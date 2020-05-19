import React from "react"
import Sliders from "./Sliders"
import TolietPaper from "./TolietPaper"
import Container from "@material-ui/core/Container";
import './main.css';


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: 1,
            fam: 1,
            numOfDays: 1
        }
    }
    
    handleChange = (num) => {
        if (num === 0) {
            this.setState({value: 1});
        } else {
            this.setState({value: num})
        }
    }
    
    handleFam = (num) => {
        this.setState({fam: num})
    }
    
    handleDays = (num) => {
        this.setState({numOfDays: num})
    }

    
    render() {
        return (
            <div>
                <Container>
                    <div className="howMany">
                        <p>You Will Need</p>   
                        <span>{this.state.value}</span>
                        <p>Rolls</p>
                        <p>(standard 2 ply roll)</p>
                    </div>
                    <div>
                        <TolietPaper className="toiletPaper" num={this.state.value}/>
                        <Sliders className="sliders" numOfDays={this.handleDays} handler={this.handleChange} fam={this.handleFam} />
                    </div>
                    <div className="bottomInfo">
                        <p>Based on about <span>20%</span> of a roll per person per day, you will be safe with <span>{this.state.value}</span> rolls for a family of <span>{this.state.fam}</span>!</p> 
                        <p>This will last around <span>{this.state.numOfDays}</span> days in Quarantine. There is no need to rush and stock up on more than that!</p>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Main