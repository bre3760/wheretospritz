import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Modal, Button } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import HomePage from '../pages/HomePage';
// https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
function NavigationBar() {
    return (

        <div>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">Where To Spritz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Navbar>
            </div>


            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path="/about" component={About}></Route>
                    <Route path="/wheretospritz" component={HomePage}></Route>

                    <Route render={function () {
                        return <p>Not found</p>
                    }} />
            </Switch>
            </div>

        </div>



    )
}

export default NavigationBar
