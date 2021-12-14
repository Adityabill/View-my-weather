import React from "react"
import {InputGroup, FormControl} from "react-bootstrap"
import SearchIcon from './Images/SearchIcon.jpg'

export default class Weather extends React.Component{
    render(){
        return(
            <div className="container">
                {/* Search Bar */}
                <InputGroup className="mb-2">
                    <InputGroup.Text><img src={SearchIcon} height="15px" width="15px" alt="Search Icon" /></InputGroup.Text>
                          <FormControl id="inlineFormInputGroup" placeholder="Enter name of city. For example: Kolkata, Dibrugarh etc..." />
                    </InputGroup>
            </div>
        )
    }
}