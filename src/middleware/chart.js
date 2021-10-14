import React, {Component} from "react";
import {Line} from "react-chartjs-2";

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: [65, 59, 80, 81, 56, 55, 40],
                datasets:[{
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        }
    }
    render(){
        return(
            <div className = "Chart">
                <Line
                    data = {this.state.chartData}
                    options ={{
                        maintainAspectRatio: false

                    }}
                />
            </div>
        )
    }
}
export default Chart;