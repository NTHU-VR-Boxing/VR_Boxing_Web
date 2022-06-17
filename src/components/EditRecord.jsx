import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { VideoPlayer } from './VideoPlayer.jsx';
import { inputMin, inputSec, inputText, submitByTime, inputTotal, initRecord, initFeedbackId, initRecordId, initFeedback } from '../states/EditRecord-action.js';
import { createFeedback, listRecordContent, listFeedbackContent, deleteFeedback } from '../api/record.js';
import { listSessionContent } from '../api/session.js';

import 'components/EditRecord.css'

class EditRecord extends React.Component {
    static propTypes = {
        pyTime: PropTypes.arrayOf(PropTypes.shape({
            min: PropTypes.number,
            sec: PropTypes.number,
            text: PropTypes.string
        })),
        total: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { recordId, feedbackId } = this.props.match.params;
        if(recordId){
            this.props.dispatch(initRecordId(recordId));
        }

        if(feedbackId) { // edit old feedback
            this.props.dispatch(initFeedbackId(feedbackId)); 
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleSecChange = this.handleSecChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTotalChange = this.handleTotalChange.bind(this);
        this.handleSubmitAll = this.handleSubmitAll.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        const { recordId, feedbackId } = this.props.match.params;
        if(recordId) {
            listRecordContent(recordId).then((res) => {
                //console.log(res);
                listSessionContent(res.practice_sesson_id).then((r) => {
                    // console.log("video:" + res.video_url);
                    this.props.dispatch(initRecord(r.practice_session_name, res.sname, res.time, res.score.hit, res.score.block, res.score.dodge, res.video_url));
                }).catch((err) => { 
                    console.log(err);
                })
            })
        }
        if(feedbackId) {
            listFeedbackContent(feedbackId).then((content) => {
                console.log(content);
                this.props.dispatch(initFeedback(content.byTime, content.total));
            })
        }
        else {
            this.props.dispatch(initFeedback([], ''))
        }
    }
    
    render() {
        // if(this.props.v_url) console.log("HEY");
        let video_url = this.props.v_url ? `https://140.114.88.33${this.props.v_url}` : 'https://140.114.88.33/v/719b12e2-b9af-4b1c-8b76-1543f4b987b2/index.m3u8';
        // let video_url = this.props.v_url.length > 0 ? `https:140.114.88.33${this.props.v_url}` : 'https://140.114.88.33/v/719b12e2-b9af-4b1c-8b76-1543f4b987b2/index.m3u8';
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            sources: [{
                src: video_url,
                type: 'application/x-mpegURL'
            }],
            width: "800",
            height: "460"
        };

        let byTimePost;
        const {byTime} = this.props;
        if(byTime.length === 0) {
            byTimePost = (<div>針對某個時刻寫些回饋吧!</div>);
        }
        else {
            byTimePost = byTime.map((post) => (
                <div className='d-flex' key={uuidv4()}>
                    <div className='p-1'>{post.min}</div>
                    <div className='p-1'> : </div>
                    <div className='p-1'>{post.sec}</div>
                    <div className='flex-fill py-1 pl-2 byTime-text'>{post.text}</div>
                </div>
            ))
        }
        return (
            <div className='background'>
                <div className='videoname'>
                    <div className='title'>
                        {this.props.session_name}
                        <br></br>
                        {this.props.sname}
                    </div>
                    <p className='date'>
                        {getDate(this.props.date)}
                    </p>
                    <div className='video'>
                        <VideoPlayer {...videoJsOptions} />
                    </div>
                    <br></br>
                    <p className='result'>
                        有效打擊次數 : {this.props.hit} 次  成功格擋次數 : {this.props.block}次 成功閃躲次數 : {this.props.dodge}次
                    </p>
                </div>
                <div className='feedback'>
                    <div className='feedbackarea'>
                        <br></br>
                        <br></br>
                        <input className='minute' type="text" value={this.props.inputMin} onChange={this.handleMinChange}></input>
                        <a>分</a>
                        <input className='second' type="text" value={this.props.inputSec} onChange={this.handleSecChange}></input>
                        <a>秒</a>
                        <br></br>
                        <br></br>
                        <input className='feedbackresponse' type="text" value={this.props.inputText} placeholder='請輸入回饋' onChange={this.handleTextChange}></input>
                        <button className='send' onClick={this.handleSubmit}>
                            送出
                        </button>
                        <br></br>
                        <div className='feedbacktext'>
                            {byTimePost}
                        </div>
                        <br></br>
                        <div className='pleaseenter'>總結 : </div>
                        <br></br>
                        <textarea className='inputsummary' rol='5' onChange={this.handleTotalChange} value={this.props.total}></textarea>
                    </div>
                    <br></br>

                    <center>
                        <button className='delete' onClick={this.handleDeleteClick}>
                            刪除
                        </button>
                        <button className='complete' onClick={this.handleSubmitAll}>
                            完成
                        </button>
                    </center>
                    
                </div>


            </div>
        );
    }

    handleMinChange(e) {
        // console.log(e.target.value);
        // if(e.target.value < 6) console.log("YEs")
        this.props.dispatch(inputMin(e.target.value));
    }

    handleSecChange(e) {
        this.props.dispatch(inputSec(e.target.value));
    }

    handleTextChange(e) {
        this.props.dispatch(inputText(e.target.value));
    }

    handleSubmit(e) {
        this.props.dispatch(submitByTime(this.props.inputMin, this.props.inputSec, this.props.inputText));
        this.props.dispatch(inputMin(''));
        this.props.dispatch(inputSec(''));
        this.props.dispatch(inputText(''));
    }

    handleTotalChange(e) {
        this.props.dispatch(inputTotal(e.target.value));
    }

    handleSubmitAll(e) {
        createFeedback(this.props.recordId, this.props.byTime, this.props.total, this.props.feedbackId).then((res) => {
            console.log(res);
            this.props.history.push('/record/');
        })
    }

    handleDeleteClick(e) {
        if(this.props.feedbackId === '') this.props.history.push('/record/');
        else{
            deleteFeedback(this.props.feedbackId).then(() => {
                this.props.history.push('/record/');
            })
        }
    }
}

export default withRouter(connect(state => ({
    ...state.editRecord
}))(EditRecord));

function getDate(unix_ts) {
    const date = new Date(unix_ts * 1000);
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}

