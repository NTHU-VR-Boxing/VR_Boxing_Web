import React from 'react';

import './List.css'
import { AddListButton } from './PageManager.jsx';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.handleStudentClick = this.handleStudentClick.bind(this);
    }

    componentWillMount() {
       
    }
    
    render() {
        const student_children = (
            <div></div>
        );
        return (
            <div className='d-flex flex-row' style={{position: "relative"}}>
                <div className='sidebar'>
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
                <div className='right'>
                    <div className='list container-fluid'>
                        <div className='row row-cols-5 g-4 all-list'>
                            <div className='col set-height'>
                                <button className='mini-card'>
                                    <p className='word'>組合拳A</p>
                                </button>
                            </div>
                            <div className='col set-height'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col set-height'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col set-height'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col set-height'>
                                <button className='mini-card'>
                                    <p className='word'>今天天氣很好今天天氣很好今天天氣很好</p>
                                </button>
                            </div>
                            <div className='col set-height'>
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
}