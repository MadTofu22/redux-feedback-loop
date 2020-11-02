import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';

class InputPage extends Component {

    constructor (props) {
        super(props);
        console.log(this.props.reduxState);
        this.inputRef = React.createRef();
        this.defaultVal = this.setInputValue(props.page);
        this.state = this.setPageInfo(props.page);
    }

    // This function sets the local state based on the page prop passed in on creation
    setPageInfo = (page) => {
        switch (page) {
            default:
                return {
                    header: '',
                    label: '',
                    actionType: '',
                    nextPage: '',
                    inputType: '',
                    placeholder: '',
                    input: ''
                };
            case 'feeling':
                return {
                    header: 'How are you feeling today?',
                    label: 'Feeling?',
                    actionType: 'FEELING_INPUT',
                    nextPage: 'understanding',
                    inputType: 'number',
                    placeholder: '0-5',
                    input: ''
                };
            case 'understanding':
                return {
                    header: 'How well are you understanding the content?',
                    label: 'Understanding?',
                    actionType: 'UNDERSTANDING_INPUT',
                    nextPage: 'support',
                    inputType: 'number',
                    placeholder: '0-5',
                    input: ''
                };
            case 'support':
                return {
                    header: 'How well are you being supported?',
                    label: 'Supported?',
                    actionType: 'SUPPORT_INPUT',
                    nextPage: 'comments',
                    inputType: 'number',
                    placeholder: '0-5',
                    input: ''
                };
            case 'comments':
                return {
                    header: 'Any comments you want to leave?',
                    label: 'Comments?',
                    actionType: 'COMMENTS_INPUT',
                    nextPage: 'review',
                    inputType: 'text',
                    placeholder: 'Comments or concerns',
                    input: ''
                };
        }
    }

    // This button handles the submit event and moves to the next page
    handleClick = () => {
        let input = this.inputRef.current.value;
        let valid = this.validateInput(input, this.state.inputType);
        let path = '/' + this.state.nextPage;
        console.log('input', input)
        
        if (valid) {
            this.props.dispatch({
                type: this.state.actionType,
                input
            });
            input = '';
            this.props.history.push(path);
        } else {
            alert('Please enter a value 0-5');
        }
    }

    // This function sets the input field value
    setInputValue = (page) => {
        const feedback = this.props.reduxState.feedbackReducer;
        console.log('in setInputValue', feedback);
        switch (page) {
            default: return '';
            case 'feeling':
                return feedback.feeling;
            case 'understanding':
                return feedback.understanding;
            case 'support':
                return feedback.support;
            case 'comments':
                return feedback.comments;
        }
    }
    // Validates the input
    validateInput = (input, type) => {
        
        if (type === 'number') {
            if (!input || ['0','1','2','3','4','5'].indexOf(input) === -1) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    // This function handles the back button on input pages
    goBack = () => {
        let input = this.inputRef.current.value;
        let valid = this.validateInput(input, this.state.inputType);
        if (valid) {
            this.props.dispatch({
                type: this.state.actionType,
                input
            });
            this.props.history.goBack();   
        } else {
            alert('Please enter a value 0-5');
        }
    }

    render () {
        return (
            <>
                <h2>{this.state.header}</h2>
                <br/>
                <TextField variant="outlined" label={this.state.label} defaultValue={this.defaultVal} inputRef={this.inputRef} placeholder={this.state.placeholder} size="small"/>
                <br/>
                <br/>
                {this.props.page === 'feeling' ?
                ''
                :
                <Button variant="contained" size="large" color="secondary" onClick={this.goBack}>Back</Button>
                }
                <Button variant="contained" size="large" color="primary" onClick={event => this.handleClick(event)}>Next</Button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const InputPageWithRouter = withRouter(InputPage);
export default connect(putReduxStateOnProps)(InputPageWithRouter);