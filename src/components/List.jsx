import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import { AddListButton } from './PageManager.jsx';
import { toggleModalAddStudent } from '../states/List-action.js';

import './List.css'

class List extends React.Component {
    static propTypes = {
        modalAddStudent: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.handleStudentClick = this.handleStudentClick.bind(this);
        this.handleAddStudentClick = this.handleAddStudentClick.bind(this);
    }
    
    render() {
        const student_children = (
            <div></div>
        );
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
                        <div className='student-div'>
                            <button className='student' onClick={this.handleStudentClick}>喵喵</button>
                        </div>
                        <div className='student-div'>
                            <button className='student' onClick={this.handleStudentClick}>汪汪</button>
                        </div>
                    </div>
                    <div className='add-student-button'>
                        <button className='clickButton' style={style} onClick={this.handleAddStudentClick}>新增學員</button>
                        <Modal isOpen={this.props.modalAddStudent} toggle={this.handleAddStudentClick}>
                            <ModalHeader toggle={this.handleAddStudentClick}>新增學員</ModalHeader>
                            <ModalBody>
                                <Input type='text' placeholder='請輸入名稱'></Input>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.handleAddStudentClick}>送出</Button>{' '}
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
}

export default connect(state => ({
    ...state.list
}))(List);