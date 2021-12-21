import React from "react";
import Axios from "axios";

export default class WeatherResult extends React.Component{
    constructor(){
        super();
        this.state={
            temperature_default: null,
            humidity_default: null,
            location_default: null,
            feels_like_data_default: null
        }
    }


    //API call for default render
    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=4149f38a602563200c95016a01cd334b&units=metric`).then((response)=>{
            response.json().then((output)=>{
                console.warn(output)
                this.setState({
                    temperature_default: output.main.temp, 
                    humidity_default: output.main.humidity, 
                    location_default: output.name,
                    feels_like_data_default: output.main.feels_like,
                })
            })
        }
        )
    }

    render(){
        return(
            <div>
                {  
                this.props.search_city?(
                //Data to be rendered if search is made
                <div>          
                    {this.props.search_city}<br/>
                    {this.props.temperature}<br/>
                    {this.props.feels_like_data}<br/>
                    {this.props.humidity_data}<br/>
                </div>
                ):
                
                //Data to be rendered is no search is made(default)
                <div>
                    {this.state.location_default}<br/>
                    {this.state.temperature_default}<br/>
                    {this.state.feels_like_data_default}<br/>
                    {this.state.humidity_default}<br/>
                </div>

                }
                             
                
                
            </div>
        )
    }
}