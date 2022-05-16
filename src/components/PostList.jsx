import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import Post from 'components/Post.jsx';

//import './PostList.css';

class PostList extends React.Component {
    static propTypes = {
        posts: PropTypes.array
        //filter: PropTypes.string,
        //onVote: PropTypes.func,
    };

    constructor(props) {
        super(props);

    }

    render() {
        const { posts } = this.props;

        let children = (
        // <ListGroupItem className="d-flex justify-content-center align-items-center">
        <div className='post-item' >
        <div className='wrap d-flex flex-row'>
            <div className='circle'>
                <div className='line'></div>
            </div>
            <div className='post'>
                <div className='ts'>Have a nice day !</div>
            </div>
        </div>
        </div>
        //</ListGroupItem>
        );
        if (posts.length) {
            children = posts.map((p) => (
                    <Post {...p} key={p.id}/>
            ));
            console.log('LISTING');
        }

        return (
        <div className="post-list">
            {children}
        </div>
        );
    }
}

export default connect(state => ({
    posts: state.post.posts
}))(PostList);