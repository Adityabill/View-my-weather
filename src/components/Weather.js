import React from "react"
import {InputGroup, FormControl, Button} from "react-bootstrap"
import SearchIcon from './Images/SearchIcon.jpg'
import WeatherResult from "./WeatherResults"
import Axios from "axios"

export default class Weather extends React.Component{
    constructor(){
        super();
        this.state={
            city: 'Kolkata'
        }
    }
    WeatherOutput(){
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=4149f38a602563200c95016a01cd334b&units=metric`).then((response)=>{
            console.warn(response);
        });
        /* alert("Weather") */
    }
    render(){
        return(
            <div className="container">
                {/* Search Bar */}
                <InputGroup className="mb-2">
                    <InputGroup.Text><img src={SearchIcon} height="15px" width="15px" alt="Search Icon" /></InputGroup.Text>
                          <FormControl id="inlineFormInputGroup" name="city" onChange={(b)=>{this.setState({city: b.target.value})}} placeholder="Enter name of city. For example: Kolkata, Dibrugarh etc..." />
                          <Button onClick={()=>{this.WeatherOutput()}}>Search</Button>
                    </InputGroup>
                    <p>The city you searched for: <strong>{this.state.city}</strong></p>

                    <div>
                        <WeatherResult city={this.state.city}/>
                    </div>
            </div>
        )
    }
}