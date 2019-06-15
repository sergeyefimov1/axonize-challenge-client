import React from 'react';
import PropTypes from 'prop-types';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            submitEnabled: false
        };

        this.checkValidity = this.checkValidity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    checkValidity() {
        if (!!this.state.email && this.state.email.length > 0 &&
            !!this.state.message && this.state.message.length > 0) {
            this.setState({submitEnabled: true});
        } else  {
            this.setState({submitEnabled: false});
        }
    }

    onSubmit() {
        this.props.onSubmit({email: this.state.email, message: this.state.message, timestamp: new Date(Date.now()).toLocaleString()});
        this.setState({
            email: '',
            message: '',
            submitEnabled: false
        });
    }

    onInputChange(field, value) {
        this.setState({[field]: value}, this.checkValidity);
    }

    render() {
        return <form className='submit-form column-container'>
            <input type='text' placeholder='Email' className='email' value={this.state.email}
                   onChange={(e) => this.onInputChange('email', e.target.value)}/>
            <textarea placeholder='message' className='message' rows='7' value={this.state.message}
                  onChange={(e) => this.onInputChange('message', e.target.value)}/>
            <div className='reverse-row-container'>
                <input type='button' className='submit-btn bold' value='Submit' disabled={!this.state.submitEnabled}
                       onClick={this.onSubmit}/>
            </div>
        </form>
    }
}

CommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default CommentForm;
