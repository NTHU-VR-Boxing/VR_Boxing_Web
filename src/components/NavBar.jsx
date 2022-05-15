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
import './NavBar.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
      
    componentWillMount() {
       
    }

            
    render() {
        return(
            <div>
                <Navbar dark expand="lg" id="headBar">
                    <div class="container-fluid">
                        <div class="d-flex bar">
                            <div class="p-2 brand">
                                <NavbarBrand  href="/">VR Boxing 輔助系統</NavbarBrand>
                            </div>
                            <div class="p-2 others">
                                <Nav navbar id="others_2">
                                    <NavItem>
                                        <NavLink id="list" href="/list/">菜單制訂</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="record" href="/record/">影片回饋</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret id="userName">User</DropdownToggle>
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
}

export default connect(state => ({
}))(NavBar);
