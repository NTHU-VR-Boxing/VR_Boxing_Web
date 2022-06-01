import React from 'react';
import {connect} from 'react-redux';
import Block from './Block.jsx';
import reactable from 'reactablejs';

class Reactable extends React.Component {

    constructor(props) {
        super(props);

        this.handleMove = this.handleMove.bind(this);
    }

    render() {
        const Interactable = reactable(Block);
        return(
            <Interactable>
                draggable={{
                    // onstart: action("DragStart"),
                    onmove: this.handleMove,
                    // onend: action("DragEnd"),
                }}
            </Interactable>
        )
    }

    handleMove(e){
        const dx = e.dx;
        this.props.dispatch(drag(dx));
        console.log("HI");
    }
}

export default connect(state => ({
    ...state.reactable
}))(Reactable);