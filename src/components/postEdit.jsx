import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';
import {
    Input,
    Button,
    Tooltip
} from 'reactstrap';
import './postEdit.css';
import DateTimePicker from 'react-datetime-picker';
//import {MyDateTimePicker} from 'components/MyDateTimePicker.jsx';
import {PlacesAutocomplete} from 'components/PlacesAutocomplete.jsx';
import {inputText, inputDanger, inputImg, inputTime} from 'states/postEdit-action.js';
import {createPost} from 'states/post-actions.js';
import lrz from 'lrz';
import { Auth } from 'aws-amplify';
import creatHistory from 'history/createBrowserHistory';
//import S3 from 'aws-sdk/clients/s3';

class PostEdit extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        inputDanger: PropTypes.bool,
        ts: PropTypes.instanceOf(Date), //not sure
        dispatch: PropTypes.func,
        name: PropTypes.string,
        imgUrl: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.fileLoad = this.fileLoad.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        //this.setLocation = this.setLocation.bind(this);

        this.inputElement = null;
    }

    render() {
        return (
            <div className='postEdit'>
                <div className='edit  d-flex flex-column align-items-start'>
                    <DateTimePicker onChange={this.handleTimeChange} value={this.props.ts}/>
                    <div className='location d-flex flex-row align-items-start'>
                        <box-icon type='solid' name='map'></box-icon>
                        <PlacesAutocomplete inputRef={el => this.inputElement = el}/>
                    </div>
                    <Input type='textarea' className='AddText' value={this.props.text} onChange={this.handleInputChange}></Input>
                    <input type="file" onChange={this.handleFileChange} />
                    <img width="40%" src={this.props.imgUrl} />
                </div>
                <Button className='done d-flex flex-row align-items-center' onClick={this.handleDoneClick}>
                    <box-icon name='check'></box-icon>
                    <span>Done</span>
                </Button>
            </div>    
        );
    }

    handleTimeChange(e) {
        this.props.dispatch(inputTime(e));
    }
    handleInputChange(e) {
        const text = e.target.value;
        this.props.dispatch(inputText(text));

        if (text && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }
    handleFileChange(e) {
        const file = e.target.files.item(0); // 取得選中檔案們的一個檔案
        const fileReader = new FileReader(); // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
        fileReader.addEventListener("load", this.fileLoad);
        fileReader.readAsDataURL(file); // 讀取完檔案後，變成URL
    }
    fileLoad(e) {// e為發出load之事件
        const Url = e.target.result;
        lrz(Url, {quality: 0.7})
            .then((res) => {
                //console.log(res.base64);
                this.props.dispatch(inputImg(res.base64));
            });

        // let res = fetch(Url).then(res => res.blob())
        //     .then(blob => {
        //         //blob is your binary file
        //         var params = { 
        //             Bucket: 'thumbnail', 
        //             Key: 'shortlist/image.jpg', 
        //             Body: blob
        //         };

        //         S3.upload(params, function (err, data) { 
        //             console.log('result:');
        //             console.log(err, data);
        //             console.log('\n');
        //             var s3url = data.Location;
        //             console.log('s3 url: ' + s3url);
        //             return res.data;
        //         });
        //     })
        
        //console.log("here: " + res);
    };
    // setLocation() {
    //     if(!this.inputElement) {
    //         this.props.dispatch(inputLocation(''));
    //     }
    //     else {
    //         this.props.dispatch(inputLocation(this.inputElement.value));
    //     }
    // }
    handleDoneClick() {
        //set location first to get correct location prop
        //this.setLocation();
        let loc = '';
        if(this.inputElement)
            if(this.inputElement.value)
                loc = this.inputElement.value;
        
        if (!this.props.text && !this.props.imgUrl && loc==='') {
            this.props.dispatch(inputDanger(true));
            return;
        }

        const id = Auth.user.username ? Auth.user.pool.clientId : Auth.user.id;
        
        this.props.dispatch(createPost(this.props.text, this.props.imgUrl, this.props.ts, loc, id));
        this.props.dispatch(inputText(''));
        this.props.dispatch(inputImg(''));
        const history = creatHistory();
        history.goBack();
        //window.location.href ="http://localhost:8080";
        //window.location.href ="http://team25-final.us-east-1.elasticbeanstalk.com";
    } 
}

export default connect(state => ({
    ...state.postEdit
}))(PostEdit);