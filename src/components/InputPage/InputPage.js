import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class InputPage extends Component {

    constructor (props) {
        super(props);
        this.state = this.setPageInfo(props.page);
        this.inputRef = React.createRef();
    }

    // This function sets the local state based on the page prop passed in on creation
    setPageInfo = (page) => {
        console.log('in InputPage::setPageInfo, page:',page);
        switch (page) {
            default:
                return {
                    header: 'INVALID PAGE',
                    label: '',
                    actionType: '',
                    nextPage: 'feeling',
                    inputType: '',
                    input: ''
                };
            case 'feeling':
                return {
                    header: 'How are you feeling today?',
                    label: 'Feeling?',
                    actionType: 'FEELING_INPUT',
                    nextPage: 'understanding',
                    inputType: 'number',
                    input: ''
                };
            case '':
                return {
                    header: '',
                    label: '',
                    actionType: '',
                    nextPage: '',
                    inputType: '',
                    input: ''
                };
        }
    }

    // This function handles the input change
    handleChange = () => {
        this.setState({
            input: this.inputRef.current.value
        });
    }

    // This button handles the submit event and moves to the next page
    handleClick = () => {
        let input = this.inputRef.current.value;
        let valid = this.validateInput(input, this.state.inputType);
        let path = '/' + this.state.nextPage;
        console.log(this.props.history.pathname);
        
        if (valid) {
            this.props.dispatch({
                type: this.state.actionType,
                data: input
            });
            this.inputRef.current.value = '';
            this.props.history.push(path);
        } else {
            alert('Please enter a value 0-5');
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

    render () {
        return (
            <>
                <h2>{this.state.header}</h2>
                <br/>
                <label htmlFor='inputField'>{this.state.label}</label>
                <br/>
                <input type={this.state.inputType} name='inputField' ref={this.inputRef} placeholder='0-5' onChange={event => this.handleChange(event)}></input>
                <button onClick={event => this.handleClick(event)}>Next</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const InputPageWithRouter = withRouter(InputPage);
export default connect(putReduxStateOnProps)(InputPageWithRouter);