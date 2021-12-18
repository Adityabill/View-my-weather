import React from "react";
import Axios from "axios";

export default class WeatherResult extends React.Component{
    constructor(){
        super();
        /* this.state={
            temperature: null,
            humidity: null,
            location: null
        } */
    }

    /* WeatherOutput = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=4149f38a602563200c95016a01cd334b&units=metric`).then((response)=>{
            console.warn(response);
        });
    } */

    //WeatherOutput(){
            /* componentDidMount(){
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=4149f38a602563200c95016a01cd334b&units=metric`).then((response)=>{
                    response.json().then((output)=>{
                        console.warn(output)
                        this.setState({temperature: output.main.temp, humidity: output.main.humidity, location: output.name})
                    })
                }
                )
            } */
    //}
    render(){
        return(
            <div>
                {/* <p>{this.state.location}</p>    */}             
                {this.props.search_city}<br/>
                {this.props.temperature}<br/>
                {this.props.feels_like_data}<br/>
                {this.props.humidity_data}<br/>
                <div>
                    {/* <p>Temperature: {this.state.temperature}&deg;C</p>
                    <p>{this.state.humidity}</p> */}
                    {/* {
                        this.state.weather_results?
                        this.state.weather_results.map((weather_result)=>
                           <div>
                               <p>Temperature: {weather_result.main.temp}</p>
                           </div>
                        ):

                        <p>City not found</p>

                    }        */}             
                </div>
                
            </div>
        )
    }
}