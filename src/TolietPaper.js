import React from "react"
import './toiletPaper.css';


// family members * num of days / 4.666 = num of rolls

class ToiletPaper extends React.Component {
    
    render (){
        let numOfRollsArr = []             
        for (var i = 0; i < this.props.num; i++) {
            numOfRollsArr.push(<img alt="toiletpaperroll" src="https://image.flaticon.com/icons/png/32/2635/2635838.png"/>)
        } 
        return (
            <div className="tp">
                {numOfRollsArr}
            </div>
        )
    }
}

export default ToiletPaper