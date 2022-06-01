import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Interactable from './Interactable.jsx';
import { Timeline } from './Timeline.jsx';

import 'components/EditList.css'

class EditList extends React.Component {
    static propTypes = {
        time: PropTypes.arrayOf(PropTypes.object)
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        return (
            <div className='d-flex flex-row'>
                <div className='sidebar'>
                    <div className='up'>
                        防守訓練
                        <div className='d-flex flex-column box'>
                            <button className='label a' onClick={this.handleClick}>前手直拳</button>
                            <button className='label b'>後手直拳</button>
                            <button className='label c'>前手擺拳</button>
                            <button className='label d'>後手擺拳</button>
                            <button className='label e'>前手勾拳</button>
                            <button className='label f'>後手勾拳</button>
                        </div>
                    </div>
                    <div className='down'>
                        進攻訓練
                        <div className='d-flex flex-column box'>
                            <button className='label g'>臉部空檔（左）</button>
                            <button className='label h'>臉部空檔（右）</button>
                            <button className='label i'>臉部空檔（中間）</button>
                            <button className='label j'>腹部空檔（左側腹）</button>
                            <button className='label k'>腹部空檔（右側腹）</button>
                            <button className='label l'>腹部空檔（中間）</button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='board d-flex'>
                        <div className='info'></div>
                        <div className='anim'></div>
                        <div className='button'></div>
                    </div>
                    <div className='timeline'>
                        <Timeline/>
                        <Interactable draggable={true} draggableOptions={draggableOptions}>
                            <div className='label a block'>前手直拳</div>
                        </Interactable>
                        <Interactable draggable={true} draggableOptions={draggableOptions}>
                            <div className='label b block' style={{left: "70px"}}>後手直拳</div>
                        </Interactable>
                    </div>
                </div>
            </div>
        );
    }

    handleClick(e){ // add chosen block to timeline

    }
}

export default connect(state => ({
    ...state.editList
}))(EditList);

const draggableOptions = {
    onmove: event => {
        const target = event.target;
        
        // keep the dragged position in the data-x/data-y attributes
        const x = (parseFloat(target.getAttribute("data-x")) || target.style.left) + event.dx;
       
        if (x > 0) {
            // translate the element
            target.style.left = `${x}px`;
            // target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";
        }

        // update the posiion attributes
        target.setAttribute("data-x", x);
    }
};