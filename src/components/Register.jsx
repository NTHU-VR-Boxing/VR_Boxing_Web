import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { FormText, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { createAccount } from '../api/account.js';
import { toggleModalReason } from '../states/Login-action';

import '../../public/sb-admin-2.css';

class Register extends React.Component {
	
	constructor(props){
		super(props);

        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
                                                <h1 className="h3 text-gray-900 mb-4">Create an Account!</h1>
                                            </div>
                                            <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
                                            <form className="user" id="register" target='dummyframe'>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                        id="exampleInputEmail" name="cname"
                                                        placeholder="Enter username..."/>
                                                    <FormText>?????????????????????????????????????????????????????????</FormText>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" name="password"
                                                        placeholder="Enter password..."/>
                                                </div>
                                                {/* TODO: validate password (upper-case/lower-case...) */}
                                                {/* TODO: validate password (repeat password) */}
                                                {/* <div class="form-group row">
                                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Password"/>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleRepeatPassword" placeholder="Repeat Password"/>
                                                    </div>
                                                </div> */}
                                                <div style={{height: "40px", color: "white"}}>123</div>
                                                <button className="btn btn-primary btn-user btn-block" onClick={this.handleClick}>Register Account</button>
                                                <Modal isOpen={this.props.modalOpen} toggle={this.toggleModal}>
                                                    <ModalHeader toggle={this.toggleModal}>Fail to Register</ModalHeader>
                                                    <ModalBody>
                                                        <p>{this.props.reason}</p>
                                                    </ModalBody>
                                                </Modal>
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

    // handleClick(e) {
    //     createAccount(); 
    //     // TODO: ?????????????????????, ????????????????????????, ????????????asyncronize
    //     this.props.history.goBack();
    // }

    handleClick(e) {
        createAccount().then((res)=>{
            if(res.success === true){
                this.props.history.goBack();
            }
            else{
                this.props.dispatch(toggleModalReason(res.reason));
            }
        })
    }

    toggleModal() {
        this.props.dispatch(toggleModalReason(''));
    }

}

export default withRouter(connect(state => ({
    ...state.register
}))(Register));
