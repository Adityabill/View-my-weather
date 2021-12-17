import React from "react";

export default class WeatherResult extends React.Component{
    constructor(){
        super();
        this.state={
            weather_result: null
        }
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=4149f38a602563200c95016a01cd334b`).then((response)=>{
            response.json().then((output)=>{
                console.warn(output)
            })
        }
        )
    }
    render(){
        return(
            <div>
                <p>{this.props.city}</p>
            </div>
        )
    }
}