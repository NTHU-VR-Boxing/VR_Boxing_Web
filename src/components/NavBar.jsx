import React from 'react';
import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Container} from 'reactstrap';
import { Link } from "react-router-dom";

import './NavBar.css';


class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        return(
            <div>
                <Navbar dark expand="lg" id="headBar">
                    <div className="container-fluid">
                        <div className="d-flex bar">
                            <div className="p-2 brand">
                                <NavbarBrand>VR Boxing 輔助系統</NavbarBrand>
                            </div>
                            <div className="p-2 others">
                                <Nav navbar id="others_2" >
                                    <NavItem>
                                        <NavLink className='nav-select' id="list" tag={Link} to="/list/" onClick={this.handleClick}>菜單制訂</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="record" tag={Link} to="/record/" onClick={this.handleClick}>影片回饋</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar style={{flexGrow: "2", alignSelf: "flex-end"}}>
                                        <DropdownToggle nav caret id="userName" style={{textAlign: "right"}}>{getUsername()}</DropdownToggle>
                                        <DropdownMenu right>
                                        <DropdownItem>
                                            登出
                                        </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }

    handleClick(e) {
        e.target.classList.add("nav-select");
        if(e.target.id === 'list'){
            document.querySelector('#record').classList.remove("nav-select");
        }
        else{
            document.querySelector('#list').classList.remove("nav-select");
        }
    }
}

export default connect(state => ({
}))(NavBar);

function getUsername() {
    let name = document.cookie;
    name = name.substring(10);
    return name;
    // console.log(name);
}

