import React from 'react';
import { Badge } from 'reactstrap';
import {Link } from "react-router-dom";
import {connect} from 'react-redux';

import { listStudent } from '../states/List-action.js';
import { changeSelect, listRecord, changeSwitch } from '../states/Record-action.js';

import './List.css'

class Record extends React.Component {
    constructor(props) {
        super(props);

        this.handleRecordClick = this.handleRecordClick.bind(this);
        this.handleStudentClick = this.handleStudentClick.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }

    componentDidMount(){
        if(this.props.select === 's-all') document.querySelector('#s-all').classList.add('select');
        else document.querySelector(`#${this.props.select}`).classList.add('select');
        this.props.dispatch(listStudent());
        const sname = this.props.select.split('-')[1];
        this.props.dispatch(listRecord(sname)); // param: selected student
    }

    componentDidUpdate(prevProps) {
        if(this.props.select !== prevProps.select) {
            const sname = this.props.select.split('-')[1];
            this.props.dispatch(listRecord(sname));
        }
    }

    render() {
        let student = null;
        const {students} = this.props;
        if (students.length > 0) {
            student = students.map((s) => (
                    <div className='student-div' key={s.sname}>
                        <button className='student' onClick={this.handleStudentClick} id={`s-${s.sname}`}>{s.sname}</button>
                    </div>
            ));
        }

        let record = null;
        const {records} = this.props;
        if(records.length === 0) {
            record = (
                <div>
                    <p>沒有任何練習影片...</p>
                </div>
            );
        }
        else {
            record = records.map((r) => (
                <div className='col' key={r.record_id} id={r.record_id}>
                    <button className='mini-card-record' onClick={this.handleRecordClick}>
                        <p className='record-word'>{r.practice_session_name}</p>
                        <p>{getDate(r.time)}</p>
                    </button>
                </div>
            ));
        }

        return (
            <div className='d-flex flex-row' style={{position: "relative"}}>
                <div className='sidebar'>
                    <div className='student-div'>
                        <button className='student select' onClick={this.handleStudentClick} id='s-all'>全部</button>
                    </div>
                    {student}
                </div>
                <div className='right'>
                <div className='custom-control custom-switch' style={{float: "right", marginRight: "20px", marginTop: "10px"}}>
                    <input
                    type='checkbox' className='custom-control-input' id='customSwitches'
                    checked={this.props.switch} onChange={this.handleSwitchChange} readOnly/>
                    <label className='custom-control-label' htmlFor='customSwitches' style={{color: "white"}}>已回饋</label>
                </div>
                <div style={{float: "right", padding: "10px", color: "white"}}>未回饋</div>
                    <div className='record container-fluid'>
                        <div className='row row-cols-5 g-4 all-record'>
                            {record}
                            {/* <div className='col'>
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
                            </div> */}
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

    handleSwitchChange(e) {
        this.props.dispatch(changeSwitch());
    }
}

export default connect(state => ({
    ...state.record
}))(Record);

function getUsername() {
    let name = document.cookie;
    name = name.substring(10);
    return name;
    // console.log(name);
}

function getDate(unix_ts) {
    const date = new Date(unix_ts * 1000);
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}
