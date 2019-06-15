import React from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";

class Comments extends React.Component {
    render() {
        return <div className='comments'>
            {
                this.props.commentList.map((comment) => {
                    return <Comment comment={comment} key={`${comment.email}${comment.timestamp}`}/>
                })
            }
        </div>
    }
}

Comments.propTypes = {
    commentList: PropTypes.array
};

export default Comments;


