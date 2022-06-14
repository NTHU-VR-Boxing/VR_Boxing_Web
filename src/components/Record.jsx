import React from 'react';
import { Badge } from 'reactstrap';
import {Link } from "react-router-dom";
import {connect} from 'react-redux';

import { listStudent } from '../states/List-action.js';
import { changeSelect } from '../states/Record-action.js';

import './List.css'

class Record extends React.Component {
    constructor(props) {
        super(props);

        this.handleRecordClick = this.handleRecordClick.bind(this);
        this.handleStudentClick = this.handleStudentClick.bind(this);

    }

    componentDidMount(){
        // this.props.dispatch(listStudent());
    }

    render() {
        let student = null;
        const {students} = this.props;
        if (students.length > 0) {
            student = students.map((s) => (
                    <div className='student-div' key={s.sname} id={s.sname}>
                        <button className='student' onClick={this.handleStudentClick}>{s.sname}</button>
                    </div>
            ));
        }

        return (
            <div className='d-flex flex-row' style={{position: "relative"}}>
                <div className='sidebar'>
                    <div className='student-div'>
                        <button className='student select' onClick={this.handleStudentClick} id='s-all'>全部</button>
                    </div>
                    <div className='student-div'>
                        <button className='student' onClick={this.handleStudentClick} id='meow'>喵喵</button>
                    </div>
                    <div className='student-div'>
                        <button className='student' onClick={this.handleStudentClick} id='wof'>汪汪</button>
                    </div>
                    {student}
                </div>
                <div className='right'>
                    <div className='record container-fluid'>
                        <div className='row row-cols-5 g-4 all-record'>
                            <div className='col'>
                                <Link to='/edit-record/'>
                                    <button className='mini-card-record' onClick={this.handleRecordClick}>
                                        <p className='record-word'>組合拳</p>
                                        <p>2022/06/07</p>
                                    </button>
                                </Link>
                            </div>
                            <div className='col'>
                                <button className='mini-card-record' id='replied' onClick={this.handleRecordClick}>
                                    <p className='record-word'>組合拳B</p>
                                    <p>2022/06/07</p>
                                </button>
                            </div>
                            {/* have message number */}
                            {/* <div className='col'>
                                <button className='mini-card-record'>
                                    <div style={{width: "80%", position: "absolute", top: "0"}}>
                                        <p className='record-word'>組合拳A</p>
                                        <p className='date'>2022/06/07</p>
                                    </div>
                                    <div style={{width: "20%", position: "absolute", right: "10px", top: "10px"}}>
                                        <Badge color="info" pill style={{fontSize: "medium"}}>3</Badge>
                                    </div>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card-record'>
                                <div style={{width: "80%", position: "absolute", top: "0"}}>
                                        <p className='record-word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                        <p className='date'>2022/06/07</p>
                                    </div>
                                    <div style={{width: "20%", position: "absolute", right: "10px", top: "10px"}}>
                                        <Badge color="info" pill style={{fontSize: "medium"}}>1</Badge>
                                    </div>
                                </button>
                            </div>
                            <div className='col'>
                                <button className='mini-card-record' id='replied'>
                                    <div style={{width: "80%", position: "absolute", top: "0"}}>
                                        <p className='record-word'>組合拳B</p>
                                        <p className='date'>2022/06/07</p>
                                    </div>
                                    <div style={{width: "20%", position: "absolute", right: "10px", top: "10px"}}>
                                        <Badge color="info" pill style={{fontSize: "medium"}}>3</Badge>
                                    </div>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    handleRecordClick(e) {
        console.log("on record click!");
    }   

    handleStudentClick(e) {
        e.target.classList.add("select");
        document.querySelector(`#${this.props.select}`).classList.remove("select");
        this.props.dispatch(changeSelect(e.target.id));
    }
}

export default connect(state => ({
    ...state.record
}))(Record);
