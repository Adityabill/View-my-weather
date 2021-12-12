import React from "react";
import {Button, Navbar, Nav, Container, NavDropdown, Modal} from 'react-bootstrap'
import MainIcon from './Images/View_My_Weather_icon.jpg'

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            display: false
        }
    }

    controlModal(){
        this.setState({display: !this.state.display})
    }


    render(){
        return(
            <div>
                <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                     <Navbar.Brand href="#home"><img src={MainIcon} height="50px" width="210px" /></Navbar.Brand>
                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                     <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="me-auto">
                       </Nav>
                       <Nav>
                         <Nav.Link href="">Home</Nav.Link>
                         <Nav.Link onClick={()=>{this.controlModal()}}>
                           About
                         </Nav.Link>

                         {/* Model Body */}
                         <Modal show={this.state.display} onHide={()=>{this.controlModal()}}>
                             <Modal.Header closeButton>
                                 About
                             </Modal.Header>

                             <Modal.Body>
                                 This App shows the current weather of any city entered by the user.<br/>
                                 Enjoy!!!
                             </Modal.Body>

                             <Modal.Footer>
                                 <Button variant="success" onClick={()=>{this.controlModal()}}>Done</Button>
                             </Modal.Footer>
                         </Modal>
                       </Nav>
                     </Navbar.Collapse>
                </Container>
                  </Navbar>
                </div>
            </div>
        )
    }
}