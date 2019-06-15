import React from 'react';
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import CommentsFilter from "./CommentsFilter";
import {getAllMessages, newMessage} from "../services/api";

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            filter: '',
            isFilter: false,
            filteredComments: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.sortComments = this.sortComments.bind(this);
    }

    componentDidMount() {
        getAllMessages().then((comments) => {
            comments = comments.map(comment => JSON.parse(comment));
            this.setState({commentList: this.sortComments(comments)});
        });
    }

    onSubmit(data) {
        newMessage(data).then(() => {
            this.setState({commentList: this.sortComments([...this.state.commentList, data])});
        });
    }

    sortComments(comments) {
        return comments.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    onFilterChange(filter) {
        if (filter) {
            let filtered = this.state.commentList.concat().filter((comment) => {
                return (comment.email.toLowerCase().includes(filter.toLowerCase()) ||
                       comment.message.toLowerCase().includes(filter.toLowerCase()));
            });

            this.setState({filteredComments: this.sortComments(filtered), isFilter: true});
        } else {
            this.setState({filteredComments: [], isFilter: false});
        }
    }

    render() {
        return <div className='column-container comments-section'>
            <CommentForm onSubmit={this.onSubmit}/>
            <CommentsFilter onFilterChange={this.onFilterChange}/>
            <Comments commentList={this.state.isFilter ? this.state.filteredComments : this.state.commentList}/>
        </div>
    }
}


export default CommentsSection;
