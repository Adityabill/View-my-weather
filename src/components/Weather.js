import React from "react"
import {InputGroup, FormControl, Button} from "react-bootstrap"
import SearchIcon from './Images/SearchIcon.jpg'
import WeatherResult from "./WeatherResults"
import Axios from "axios"

export default class Weather extends React.Component{
    constructor(){
        super();
        this.state={
            city: null,
            temp: null,
            humidity: null,
            feels_like: null,
            location: null,
            status_code: null,
            country_code: null,
        }
    }
    
    //Function to fetch weather data from API 
    WeatherOutput(){
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=4149f38a602563200c95016a01cd334b&units=metric`).then((response)=>{
            console.warn(response.data.sys.country)
            this.setState(
                {
                    temp: response.data.main.temp, 
                    humidity: response.data.main.humidity,
                    feels_like: response.data.main.feels_like,
                    location: response.data.name,
                    status_code: response.data.cod,
                    country_code: response.data.sys.country,

                })
        });

        if(this.state.status_code=="404"){
            alert("City you searched is not available or invalid. Please check the spellings.")
        }
        
    }
    render(){
        return(
            <div className="container">
                

                {/* Search Bar */}
                <InputGroup className="mb-2">
                    <InputGroup.Text><img src={SearchIcon} height="15px" width="15px" alt="Search Icon" /></InputGroup.Text>
                          <FormControl id="inlineFormInputGroup" name="city" onChange={(b)=>{this.setState({city: b.target.value})}} placeholder="Enter name of city. For example: Kolkata, Dibrugarh etc..." />
                          <Button onClick={()=>{this.WeatherOutput()}}>Search</Button> {/* Button to call WeatherOutput() function */}
                    </InputGroup>
                    <p>The city you searched for: <strong>{this.state.city}</strong></p>

                    <div>
                        <WeatherResult //props
                            search_city={this.state.location}
                            temperature={this.state.temp}
                            feels_like_data={this.state.feels_like}
                            humidity_data={this.state.humidity}
                            status_code_data={this.state.status_code}
                            country_code_data={this.state.country_code}
                        />
                    </div>
            </div>
        )
    }
}