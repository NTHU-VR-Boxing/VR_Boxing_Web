import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormFeedback } from 'reactstrap';

import { AddListButton } from './PageManager.jsx';
import { listStudent, toggleModalAddStudent } from '../states/List-action.js';

import './List.css'

class List extends React.Component {
    static propTypes = {
        modalAddStudent: PropTypes.bool,
        students: PropTypes.array,
        sessions: PropTypes.array
    };

    constructor(props) {
        super(props);

        this.handleStudentClick = this.handleStudentClick.bind(this);
        this.handleAddStudentClick = this.handleAddStudentClick.bind(this);
        this.handleAddStudent = this.handleAddStudent.bind(this);
        this.cancelAlert = this.cancelAlert.bind(this);
    }

    componentDidMount() { // list students and sessions
        // TODO
        this.props.dispatch(listStudent());
    }
    
    render() {
        let student = null;
        const {students} = this.props;
        if (students.length > 0) {
            student = students.map((s) => (
                    <div className='student-div' key={s.sname}>
                        <button className='student' onClick={this.handleStudentClick}>{s.sname}</button>
                    </div>
            ));
        }

        const style = {
            backgroundColor: "white",
            width: "150px"
        }
      
        return (
            <div className='d-flex flex-row' style={{position: "relative"}}>
                <div className='sidebar'>
                    <div className='all-student'>
                        <div className='student-div'>
                            <button className='student' onClick={this.handleStudentClick}>全部</button>
                        </div>
                        {student}
                    </div>
                    <div className='add-student-button'>
                        <button className='clickButton' style={style} onClick={this.handleAddStudentClick}>新增學員</button>
                        <Modal isOpen={this.props.modalAddStudent} toggle={this.handleAddStudentClick}>
                            <ModalHeader toggle={this.handleAddStudentClick}>新增學員</ModalHeader>
                            <ModalBody>
                                <Input type='text' placeholder='請輸入名稱' id='new-student' onClick={this.cancelAlert}></Input>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleAddStudent}>送出</Button>
                                <Button color="secondary" onClick={this.handleAddStudentClick}>取消</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
                <div className='right'>
                    <div className='list container-fluid'>
                        <div className='row row-cols-5 g-4 all-list'>
                            <div className='col'>
                                <button className='mini-card'>
                                    <p className='word'>組合拳A</p>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='add-button'>
                        <AddListButton/>
                    </div>
                </div>
            </div>
        );
    }

    handleStudentClick(e) {
        
    }

    handleAddStudentClick(e) {
        this.props.dispatch(toggleModalAddStudent());
    }

    handleAddStudent(e) {
        let target = document.querySelector("#new-student");
        if(target.value !== ''){
            this.props.dispatch(toggleModalAddStudent());
             // TODO: add to backend
        }
        else{
            console.log("Empty input.");
            target.style.border = "red solid 2px";
        }
    }

    cancelAlert(e) {
        e.target.style.border = "#E0E0E0 solid 2px";
    }
}

export default connect(state => ({
    ...state.list
}))(List);