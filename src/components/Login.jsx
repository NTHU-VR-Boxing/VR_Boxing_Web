import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter} from "react-router-dom";

import '../../public/sb-admin-2.css';

class Login extends React.Component {
	
	constructor(props){
		super(props);

        this.handleClick = this.handleClick.bind(this);
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

	render() {
		return (
            <div style={{height: "100%"}}>
			<div className="container" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                 {/* Outer Row  */}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-auto">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h3 text-gray-900 mb-4">VR Boxing</h1>
                                            </div>
                                            <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
                                            <form className="user" target='dummyframe'>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Username"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password"/>
                                                </div>
                                                {/* <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                                        <label class="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div> */}
                                                {/* TODO: 改成不能直接link過去，要驗證成功 */}
                                                {/* <Link to="/list/" className="btn btn-primary btn-user btn-block" onClick={this.handleClick}>Login</Link> */}
                                                <button className="btn btn-primary btn-user btn-block" onClick={this.handleClick}>Login</button>
                                            </form>
                                            <hr/>
                                            {/* <div class="text-center">
                                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                                            </div> */}
                                            <form className="user">
                                                <div className="text-center">
                                                    <Link className=" btn btn-info btn-user btn-block" to="/register/">Create an Account!</Link>
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

    handleClick(e) {
        this.props.history.push("/list/");
    }
}

export default withRouter(connect(state => ({
}))(Login));
