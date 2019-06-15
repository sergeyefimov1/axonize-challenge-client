import React from 'react';
import PropTypes from 'prop-types';

class CommentsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.props.onFilterChange(value),700);
    }

    render() {
        return <input type='text' placeholder='Filter' onChange={(e) => this.onChange(e.target.value)}/>
    }
}

CommentsFilter.propTypes = {
    onFilterChange: PropTypes.func
};

export default CommentsFilter;
