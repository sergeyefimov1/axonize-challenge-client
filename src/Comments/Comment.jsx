import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import Gravatar from 'react-gravatar';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.getTimeStamp = this.getTimeStamp.bind(this);
    }

    getTimeStamp() {
        if (Math.abs(moment().diff(moment(this.props.comment.timestamp))) < 1000 * 60) { // 60 seconds
            return 'Just Now';
        } else {
            return moment(this.props.comment.timestamp).calendar();
        }
    }

    render() {
        let message = this.props.comment.message ? this.props.comment.message.split('\n').map(i => {
            return <p key={i}>{i}</p>
        }) : '';
        return <div className='row-container comment'>
            <Gravatar email={this.props.comment.email} />
            <div className='column-container'>
                <div className='row-container'>
                    <label className='bold cut-text'>{this.props.comment.email}</label>
                    <label className='light'>{this.getTimeStamp()}</label>
                </div>
                <div className='comment-msg'>{message}</div>
            </div>
        </div>
    }
}

Comment.propTypes = {
    comment: PropTypes.object
};

export default Comment;

