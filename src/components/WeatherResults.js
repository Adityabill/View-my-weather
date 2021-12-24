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
                    //status_code_d: output.cod
                    country_code_default: output.sys.country,
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
                <div style={}>          
                    {this.props.search_city}, {this.props.country_code_data}<br/>
                    Current Temperature: {this.props.temperature}&deg;C &ensp;
                    Feels Like: {this.props.feels_like_data}&deg;C<br/>
                    Humidity: {this.props.humidity_data} %<br/>
                    {/* Status Code: {this.props.status_code_data} */}
                </div>
                ):
                
                //Data to be rendered is no search is made(default)
                <div>
                    {this.state.location_default}, {this.state.country_code_default}<br/>
                    Current Temperature: {this.state.temperature_default}&deg;C &ensp;
                    Feels Like: {this.state.feels_like_data_default}&deg;C<br/>
                    Humidity: {this.state.humidity_default} %<br/>
                    {/* Status Code: {this.state.status_code_d} */}
                </div>

                }
                             
                
                
            </div>
        )
    }
}