import React, { Component, cloneElement } from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";

import interact from "interactjs";

class Interactable extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        draggable: PropTypes.bool,
        draggableOptions: PropTypes.object,
        dropzone: PropTypes.bool,
        dropzoneOptions: PropTypes.object,
        resizable: PropTypes.bool,
        resizableOptions: PropTypes.object
    };

    static defaultProps = {
        draggable: false,
        dropzone: false,
        resizable: false,
        draggableOptions: {},
        dropzoneOptions: {},
        resizableOptions: {}
    };

    constructor(props) {
        super(props);
    }

    render() {
        return cloneElement(this.props.children, {
            ref: node => (this.node = node),
            draggable: true // not sure
        });
    }

    componentDidMount() {
        // console.log(this.ref.current);
        this.interact = interact(findDOMNode(this.node));
        this.setInteractions();
    }

    componentWillReceiveProps() { // unused
        this.interact = interact(findDOMNode(this.node));
        this.setInteractions();
    }

    setInteractions() {
        // console.log(this.props);
        if (this.props.draggable)
            this.interact.draggable(this.props.draggableOptions);
        if (this.props.dropzone) 
            this.interact.dropzone(this.props.dropzoneOptions);
        if (this.props.resizable)
            this.interact.resizable(this.props.resizableOptions);
    }
}

export default connect(state => ({
    ...state.interactable
}))(Interactable);
