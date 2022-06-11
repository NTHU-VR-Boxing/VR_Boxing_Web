import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import 'components/EditRecord.css'

class EditRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: '',
            second: '',
            value: '',
            feedbacktext: '',
            send: false,
            lastfeedback:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
     
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.className;
        
        this.setState({
            [name]: value,
        });

      }
    
      handleSubmit(event) {
        //alert(this.state.minute + " : " + this.state.second + '      ' + this.state.feedbackresponse);
        
            this.setState({
                send : true,
                feedbacktext :  this.state.lastfeedback + '\n' + this.state.minute + " : " + this.state.second + '      ' + this.state.feedbackresponse ,
                lastfeedback : this.state.feedbacktext,
            })
            
        event.preventDefault();
      }
      

    render() {
        return (
            <div className='background'>
                <div className='videoname'>
                    <a className='title'>
                        組合拳A
                        <br></br>
                        喵喵
                    </a>
                    <br>
                    </br>
                    <a className='date'>
                        2021/06/11
                    </a>
                    <br></br>
                    <br></br>
                    <div className='video'>

                    </div>
                    <br></br>
                    <a className='result'>
                        有效打擊次數 : 3 次  成功格擋次數 : 3次 成功閃躲次數 : 3次
                    </a>
                </div>
                <div className='feedback'>
                    <div className='feedbackarea'>
                        <br></br>
                        <br></br>
                        <input className='minute' type="text" value={this.state.minute} onChange={this.handleChange}>
                        </input>
                        <a>分</a>
                        <input className='second' type="text" value={this.state.second} onChange={this.handleChange}>
                        </input>
                        <a>秒</a>
                        <br></br>
                        <br></br>
                        <a className='pleaseenter'>請輸入回饋 : </a>
                        <br></br>
                        <input className='feedbackresponse' type="text" value={this.state.feedbackresponse} onChange={this.handleChange}>
                        </input>
                        <button className='send' value={this.state.send}  onClick={this.handleSubmit}>
                            送出
                        </button>
                        <br></br>
                        <div className='feedbacktext' value={this.state.feedbacktext}>
                            <a>{this.state.send && this.state.lastfeedback}</a>
                        </div>
                        <br></br>
                        <a className='pleaseenter'>總結 : </a>
                        <br></br>
                        <textarea className='inputsummary' rol='5'>
                        </textarea>
                    </div>
                    <br></br>

                    <center>
                        <button className='delete'>
                            刪除
                        </button>
                        <button className='complete'>
                            完成
                        </button>
                    </center>
                    
                </div>


            </div>
        );
    }
}

export default connect(state => ({
    ...state.editrecord
}))(EditRecord);

