import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';
import {
    Tooltip
} from 'reactstrap';
import './Post.css';

class Post extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        ts: PropTypes.instanceOf(Date), //not sure
        dispatch: PropTypes.func,
        imgUrl: PropTypes.string
        //name: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        //console.log(this.props.img);
        //console.log(Number(this.props.ts));
        return (
            <div className='post-item' >
                <div className='wrap d-flex flex-row'>
                    <div className='circle'>
                        <div className='line'></div>
                    </div>
                    <div className='post'>
                        <div className='ts'>{getTime(Number(this.props.ts))}</div>
                        <div className='text'>{this.props.text}</div>
                        <img width="100%" src={this.props.img} />
                    </div>
                </div>
            </div>
        );
    }

    handleClick() {
        console.log('hihi');
    }
}

function getTime(ts) {
    let time = new Date(ts);
    let hr = time.getHours();
    let min = time.getMinutes();
    return hr + ":" + min;
}

export default connect((state, ownProps) => ({
    ...state.post
}))(Post);