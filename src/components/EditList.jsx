import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col } from 'reactstrap';
import { withRouter } from "react-router-dom";

import Interactable from './Interactable.jsx';
import { Timeline } from './Timeline.jsx';
import { addBlock, moveBlock, initSession, nameChange, hitChange, blockChange, dodgeChange, initStudent } from '../states/EditList-action.js';
import { createSession, listSessionContent, deleteSession } from '../api/session.js';

import 'components/EditList.css';

class EditList extends React.Component {
    static propTypes = {
        // timeline: PropTypes.arrayOf(PropTypes.object) // JSON: [{id, timeStart},]
        timeline: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string, // uuid v4
            fistType: PropTypes.string,
            timeStart: PropTypes.number
        }))

    };

    constructor(props) {
        super(props);

        const { id, sname } = this.props.match.params;
        if(id){
            listSessionContent(id).then((res) => {
                console.log(res);
                this.props.dispatch(initSession(res.arrangement.name, res.goal.hit, res.goal.block, res.goal.dodge, res.arrangement.timeline));
                this.props.dispatch(initStudent(res.sname));
            })
        }
        if(sname) {
            this.props.dispatch(initStudent(sname));
        }
        
        this.handleBlockClick = this.handleBlockClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleHitChange = this.handleHitChange.bind(this);
        this.handleBlockChange = this.handleBlockChange.bind(this);
        this.handleDodgeChange = this.handleDodgeChange.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

        this.draggableOptions = {
            onmove: event => {
                const target = event.target;
                
                // keep the dragged position in the data-x/data-y attributes
                const pos = target.style.left.indexOf("px");
                const left = parseFloat(target.style.left.substr(0, pos));
                const x = (parseFloat(target.getAttribute("data-x")) || left) + event.dx;
            
                if(x >= 0) {
                    // translate the element
                    target.style.left = `${x}px`;
                    // target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";
    
                    // update the posiion attributes
                    target.setAttribute("data-x", x);
                }
            },
            onend: event => {
                const target = event.target;
                const new_time = parseFloat(target.getAttribute("data-x")) / 15 * 0.1;
                this.props.dispatch(moveBlock(target.id, new_time));
            }
        };
    }

    componentDidMount() {
        this.props.dispatch(initSession('', '', '', '', []));
    }
    
    render() {
        const {timeline} = this.props;

        let arrangement;
        if(timeline.length == 0){ // no blocks
            arrangement = (<div style={{textAlign: "center"}}>???????????????????????????????????????</div>);
        }
        else{ // render blocks
            arrangement = timeline.map((block) => {
                const class_name = `label block ${block.fistType}`;

                const length = block.timeStart / 0.1 * 15;
                const style_left = `${length}px`;

                return(
                    <Interactable draggable={true} draggableOptions={this.draggableOptions} key={block.id}>
                        <div className={class_name} style={{left: style_left}} id={block.id}>{getFistName(block.fistType)}</div>
                    </Interactable>
                );
            });
        }
      
        return (
            <div className='d-flex flex-row'>
                <div className='sidebar'>
                    <div className='up'>
                        ????????????
                        <div className='d-flex flex-column box'>
                            <button className='label a' onClick={this.handleBlockClick}>????????????</button>
                            <button className='label b' onClick={this.handleBlockClick}>????????????</button>
                            <button className='label c' onClick={this.handleBlockClick}>????????????</button>
                            <button className='label d' onClick={this.handleBlockClick}>????????????</button>
                            <button className='label e' onClick={this.handleBlockClick}>????????????</button>
                            <button className='label f' onClick={this.handleBlockClick}>????????????</button>
                        </div>
                    </div>
                    <div className='down'>
                        ????????????
                        <div className='d-flex flex-column box'>
                            <button className='label g' onClick={this.handleBlockClick}>?????????????????????</button>
                            <button className='label h' onClick={this.handleBlockClick}>?????????????????????</button>
                            <button className='label i' onClick={this.handleBlockClick}>????????????????????????</button>
                            <button className='label j' onClick={this.handleBlockClick}>???????????????????????????</button>
                            <button className='label k' onClick={this.handleBlockClick}>???????????????????????????</button>
                            <button className='label l' onClick={this.handleBlockClick}>????????????????????????</button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='board d-flex'>
                        <div className='info'>
                            <Form style={{padding: "20px"}} id='session-goal'>
                                <FormGroup className='mb-5'>
                                    <Label for='name' style={{color: "white", fontSize:"x-large"}}>????????????</Label>
                                    <Input type='text' name='name' value={this.props.name} onChange={this.handleNameChange}/>
                                </FormGroup>
                                <FormGroup row style={{color: "white"}}>
                                    <legend style={{color: "white"}}>????????????</legend>
                                    <FormGroup className='d-flex flex-row'>
                                        <Label for='hit'>????????????</Label>
                                        <Col >
                                            <Input type="text" name="hit" id="hit" bsSize="sm" value={this.props.hit} onChange={this.handleHitChange}/>
                                        </Col>
                                        <Label style={{flexGrow: "2"}}>???</Label>
                                    </FormGroup>
                                    <FormGroup className='d-flex flex-row'>
                                        <Label for='block'>????????????</Label>
                                        <Col >
                                            <Input type="text" name="block" id="block" bsSize="sm" value={this.props.block} onChange={this.handleBlockChange}/>
                                        </Col>
                                        <Label style={{flexGrow: "2"}}>???</Label>
                                    </FormGroup>
                                    <FormGroup className='d-flex flex-row'>
                                        <Label for='dodge'>????????????</Label>
                                        <Col >
                                            <Input type="text" name="dodge" id="dodge" bsSize="sm" value={this.props.dodge} onChange={this.handleDodgeChange}/>
                                        </Col>
                                        <Label style={{flexGrow: "2"}}>???</Label>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className='anim'></div>
                        <div className='button d-flex flex-column'>
                            <button className='clickButton' style={{backgroundColor: "#F3B61B"}} onClick={this.handleSaveClick}>??????</button>
                            {/* <SaveButton/> */}
                            <button className='clickButton' style={{backgroundColor: "red", color: "white"}} onClick={this.handleDeleteClick}>??????</button>
                        </div>
                    </div>
                    <div className='timeline'>
                        <Timeline/>
                        {arrangement}
                    </div>
                </div>
            </div>
        );
    }

    handleBlockClick(e){ // add chosen block to timeline
        let class_name = e.target.className.split(/\s+/);
        
        // find start time of this new block
        const {timeline, dispatch} = this.props;
        if(timeline.length == 0) { // add to time(0s)
            dispatch(addBlock(uuidv4(), class_name[1], 0));
        }
        else{ 
            // find the last block
            let max_idx = 0;
            let max = -1;
            timeline.forEach(function(item, i){
                if(item.timeStart > max){
                    max = item.timeStart;
                    max_idx = i;
                }
            });
            const dt = getFistTime(timeline[max_idx].fistType);
            dispatch(addBlock(uuidv4(), class_name[1], timeline[max_idx].timeStart + dt));
        }
    } 

    handleSaveClick(e) {
        let id = this.props.match.params.id ? this.props.match.params.id : ''; // whether to edit old session
        createSession(this.props.timeline, this.props.sname, id).then(()=>{
            this.props.history.goBack();
        });
    }

    handleNameChange(e){
        this.props.dispatch(nameChange(e.target.value));
    }

    handleHitChange(e){
        this.props.dispatch(hitChange(e.target.value));
    }

    handleBlockChange(e){
        this.props.dispatch(blockChange(e.target.value));
    }

    handleDodgeChange(e){
        this.props.dispatch(dodgeChange(e.target.value));
    }

    handleDeleteClick(e) {
        let id = this.props.match.params.id;
        if(id){
            deleteSession(id).then(() => {
                this.props.history.goBack();
            })
        }
        else this.props.history.goBack();
    }
}

export default withRouter(connect(state => ({
    ...state.editList
}))(EditList));


function getFistName(fist_type){
    switch(fist_type){
        case 'a':
            return "????????????";
        case 'b':
            return "????????????";
        case 'c':
            return "????????????";
        case 'd':
            return "????????????";
        case 'e':
            return "????????????";
        case 'f':
            return "????????????";
        case 'g':
            return "?????????????????????";
        case 'h':
            return "?????????????????????";
        case 'i':
            return "????????????????????????";
        case 'j':
            return "???????????????????????????";
        case 'k':
            return "???????????????????????????";
        case 'l':
            return "????????????????????????";
        default:
            return "None";
    }
}

function getFistTime(fist_type) {
    switch(fist_type){
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
            return 0.4;
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
            return 0.6;
        default:
            return 0.6;
    }
}

