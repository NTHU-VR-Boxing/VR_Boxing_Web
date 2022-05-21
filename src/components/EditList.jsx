import React from 'react';

import 'components/EditList.css'

export default class EditList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
       
    }
    
    render() {
        return (
            <div className='d-flex flex-row'>
                <div className='sidebar'>
                    <div className='up'>
                        防守訓練
                        <div className='d-flex flex-column box'>
                            <div className='label a'>前手直拳</div>
                            <div className='label b'>後手直拳</div>
                            <div className='label c'>前手擺拳</div>
                            <div className='label d'>後手擺拳</div>
                            <div className='label e'>前手勾拳</div>
                            <div className='label f'>後手勾拳</div>
                        </div>
                    </div>
                    <div className='down'>
                        進攻訓練
                        <div className='d-flex flex-column box'>
                            <div className='label g'>臉部空檔（左）</div>
                            <div className='label h'>臉部空檔（右）</div>
                            <div className='label i'>臉部空檔（中間）</div>
                            <div className='label j'>腹部空檔（左側腹）</div>
                            <div className='label k'>腹部空檔（右側腹）</div>
                            <div className='label l'>腹部空檔（中間）</div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='board d-flex'>
                        <div className='info'></div>
                        <div className='anim'></div>
                        <div className='button'></div>
                    </div>
                    <div className='timeline'></div>
                    <div className='edit'>

                    </div>
                </div>
            </div>
        );
    }
}