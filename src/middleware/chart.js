import React from "react";
import {Line} from "react-chartjs-2";

const Chart = (props) =>{   
    return(
    <div className = "Chart">
        <Line
            data = {{
                labels: props.labels,
                datasets:[{
                    data: props.data,
                    label: props.label,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }}
            height ={400}
            width = {600}
            options ={{
                maintainAspectRatio: false

            }}
        />
    </div>
    )
}

export default Chart;