import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import '../../public/sb-admin-2.css';

class Login extends React.Component {
	
	constructor(props){
		super(props);
        /*
		this.state = {
			createAccountModalVisibility: false,
			loginUsername: "",
			loginPassword: "",
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		}
        */
	}

    componentWillMount() {
       
    }

	// componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.props.LoginReducer.login === true){
    //         this.props.history.push("/control");
    //     }
    // }

	render() {
		return (
            <div style={{height: "100%"}}>
			<div class="container" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                 {/* Outer Row  */}
                <div class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9">

                        <div class="card o-hidden border-0 shadow-lg my-auto">
                            <div class="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h3 text-gray-900 mb-4">VR Boxing</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."/>
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password"/>
                                                </div>
                                                {/* <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                                        <label class="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div> */}
                                                <Link to="/list/" class="btn btn-primary btn-user btn-block">Login</Link>
                                            </form>
                                            <hr/>
                                            {/* <div class="text-center">
                                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                                            </div> */}
                                            <form class="user">
                                                <div class="text-center">
                                                    <a class=" btn btn-info btn-user btn-block" href="register.html">Create an Account!</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            </div>
		);
	}
}

export default connect(state => ({
}))(Login);
