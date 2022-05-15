import React from 'react';
import {connect} from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
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

        /*
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        */
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
    /*
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    */
}

export default connect(state => ({
}))(NavBar);


/*
export function NavBar(){
    //const history = useHistory();
    //const location = useLocation();
    
    return(
        <div className='bar'>
            <div className="flex items-center justify-center mt-10 text-center py-6">
                <span className="mx-2 text-2xl font-semibold text-black">
                    <h2>Diary</h2>
                </span>
            </div>
            <Navigation
                activeItemId = {location.pathname}
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: "User",
                        itemId: "/user",
                        elemBefore: () => <box-icon type='solid' name='user-circle'></box-icon>
                    },
                    {
                        title: "Calendar",
                        itemId: "/calendar",
                        elemBefore: () => <box-icon name='calendar-week'></box-icon>
                    },
                    {
                        title: "diary",
                        itemId: "/diary",
                        elemBefore: () => <box-icon name='bookmark'></box-icon>
                    },
                    {
                        title: "group",
                        itemId: "/group",
                        elemBefore: () => <box-icon type='solid' name='bookmark'></box-icon>,
                        subNav: []
                    },
                    {
                        title: "Join / Read",
                        itemId: "/join",
                        elemBefore: () => <box-icon name='door-open'></box-icon>
                    }
                ]}
            />
        </div>
        
    );
}
*/
