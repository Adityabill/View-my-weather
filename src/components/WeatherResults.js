import React from "react";
//import Axios from "axios";

export default class WeatherResult extends React.Component{
    constructor(){
        super();
        this.state={
            temperature_default: null,
            humidity_default: null,
            location_default: null,
            feels_like_data_default: null,
            status_code_d: null,
            country_code_default: null,
            description_default: null,
            max_temp_default: null,
            min_temp_default: null,
        }
    }


    //API call for default render
    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=4149f38a602563200c95016a01cd334b&units=metric`).then((response)=>{
            response.json().then((output)=>{
                console.warn(output.weather[0].icon)
                this.setState({
                    temperature_default: output.main.temp, 
                    humidity_default: output.main.humidity, 
                    location_default: output.name,
                    feels_like_data_default: output.main.feels_like,
                    max_temp_default: output.main.temp_max,
                    min_temp_default: output.main.temp_min,
                    country_code_default: output.sys.country,
                    description_default: output.weather[0].main,
                })
            })
        }
        )
    }

    render(){
        return(
            <div className="background-style">
                {  
                this.props.search_city?(
                //Data to be rendered if search is made
                <div className="weather-div container-fluid">          
                    <span className="location-data">{this.props.search_city}, {this.props.country_code_data}<br/></span>
                    <span className="current-temperature-text">{this.props.temperature}&deg;C &ensp;</span><br/>
                    <span className="current-weather-description">{this.props.description_data}</span><br/>
                    Feels Like: <span className="feels-like-text">{this.props.feels_like_data}&deg;C<br/></span>
                    Maximum Temperature: <span className="max-min-temp">{this.props.max_temperature}&deg;C</span> <br/>
                    Minimum Temperature: <span className="max-min-temp">{this.props.min_temperature}&deg;C</span>   <br/>
                    Humidity: <span className="humidity-text">{this.props.humidity_data} %<br/></span>
                    {/* Status Code: {this.props.status_code_data} */}
                </div>
                ):
                
                //Data to be rendered is no search is made(default)
                <div className="weather-div container-fluid">
                    <span className="location-data">{this.state.location_default}, {this.state.country_code_default}</span><br/>
                    <span className="current-temperature-text">{this.state.temperature_default}&deg;C &ensp;</span><br/>
                    <span className="current-weather-description">{this.state.description_default}</span><br/>
                    Feels Like: <span className="feels-like-text">{this.state.feels_like_data_default}&deg;C<br/></span>
                    Maximum Temperature: <span className="max-min-temp">{this.state.max_temp_default}&deg;C</span>  <br/>
                    Minimum Temperature: <span className="max-min-temp">{this.state.min_temp_default}&deg;C</span>   <br/>
                    Humidity: <span className="humidity-text">{this.state.humidity_default} %<br/></span>
                    {/* Status Code: {this.state.status_code_d} */}
                </div>

                }
                             
                
                
            </div>
        )
    }
}