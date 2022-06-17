import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormFeedback } from 'reactstrap';

import { AddListButton } from './PageManager.jsx';
import { listStudent, toggleModalAddStudent, AddStudent, listSession, changeSelect } from '../states/List-action.js';

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
        this.handleSessionClick = this.handleSessionClick.bind(this);
    }

    componentDidMount() { // list students and sessions
        if(this.props.select === 's-all') document.querySelector('#s-all').classList.add('select');
        else document.querySelector(`#${this.props.select}`).classList.add('select');
        this.props.dispatch(listStudent());
        const sname = this.props.select.split('-')[1];
        this.props.dispatch(listSession(getUsername(), sname));
    }

    componentDidUpdate(prevProps) {
        if(this.props.select !== prevProps.select) {
            const sname = this.props.select.split('-')[1];
            this.props.dispatch(listSession(getUsername(), sname));
        }
    }
    
    render() {
        let student = null;
        const {students} = this.props;
        if (students.length > 0) {
            student = students.map((s) => {
                let withoutSpaceName = s.sname;
                withoutSpaceName = withoutSpaceName.replace(/\s+/g, '');
                // console.log(withoutSpaceName);
            
                return (
                     <div className='student-div' key={s.sname}>
                        <button className='student' onClick={this.handleStudentClick} id={`s-${withoutSpaceName}`}>{s.sname}</button>
                    </div>
                );   
            });
        }

        let session = null;
        const {sessions} = this.props;
        if(sessions.length === 0) {
            session = (
                <div>
                    <p>沒有已建立的清單...</p>
                </div>
            );
        }
        else {
            session = sessions.map((ses) => (
                <div className='col' key={ses.practice_session_id} id={ses.practice_session_id}>
                    <button className='mini-card' onClick={this.handleSessionClick}>
                        <p className='word'>{ses.practice_session_name}</p>
                    </button>
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
                            <button className='student' onClick={this.handleStudentClick} id='s-all'>全部</button>
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
                            {session}
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
        e.target.classList.add("select");
        document.querySelector(`#${this.props.select}`).classList.remove("select");
        this.props.dispatch(changeSelect(e.target.id));
    }

    handleAddStudentClick(e) {
        this.props.dispatch(toggleModalAddStudent());
    }

    handleAddStudent(e) {
        let target = document.querySelector("#new-student");
        if(target.value !== ''){
            this.props.dispatch(toggleModalAddStudent());
             // TODO: add to backend
            this.props.dispatch(AddStudent(target.value));
        }
        else{
            console.log("Empty input.");
            target.style.border = "red solid 2px";
        }
    }

    cancelAlert(e) {
        e.target.style.border = "#E0E0E0 solid 2px";
    }

    handleSessionClick(e) {
        // console.log(e.target.parentElement.parentNode.id)
        this.props.history.push(`/edit-list/${e.target.parentElement.parentNode.id}`);
    }
}

export default withRouter(connect(state => ({
    ...state.list
}))(List));

function getUsername() {
    let name = document.cookie;
    name = name.split(';')[0];
    name = name.substring(10);
    return name;
    // console.log(name);
}