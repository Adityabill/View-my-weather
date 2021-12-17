import React from "react"
import {InputGroup, FormControl} from "react-bootstrap"
import SearchIcon from './Images/SearchIcon.jpg'
import WeatherResult from "./WeatherResults";

export default class Weather extends React.Component{
    constructor(){
        super();
        this.state={
            city: 'Kolkata'
        }
    }
    render(){
        return(
            <div className="container">
                {/* Search Bar */}
                <InputGroup className="mb-2">
                    <InputGroup.Text><img src={SearchIcon} height="15px" width="15px" alt="Search Icon" /></InputGroup.Text>
                          <FormControl id="inlineFormInputGroup" name="city" onChange={(b)=>{this.setState({city: b.target.value})}} placeholder="Enter name of city. For example: Kolkata, Dibrugarh etc..." />
                    </InputGroup>
                    <p>The city you searched for: <strong>{this.state.city}</strong></p>

                    <div>
                        <WeatherResult city={this.state.city}/>
                    </div>
            </div>
        )
    }
}