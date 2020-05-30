import React from "react"
import './toiletPaper.css';


// number of people in household * num of days * num of visits (3 avg) * avg num of wipes (3 avg) / num of sheets (200) = num of rolls

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