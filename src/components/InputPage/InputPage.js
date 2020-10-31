import React, {Component} from 'react';
import {HashRouter as Link} from 'react-router-dom';
import {connect} from 'react-redux';

class InputPage extends Component {

    state = {
        header: '',
        label: '',
        actionType: ''
    }

    componentDidMount = () => {
        console.log('InputPage props:', this.props);
        this.setPageInfo(this.props.page);
    }

    // This funciton sets the local state based on the page prop passed in on creation
    setPageInfo = (page) => {
        console.log('in InputPage::setPageInfo, page:',page);
        switch (page) {
            default:
                this.setState({
                    header: 'PAGE NOT FOUNT',
                    label: 'PAGE NOT FOUNT',
                    actionType: 'PAGE NOT FOUNT'
                });
                break;
            case 'feeling':
                this.setState({
                    header: 'How are you feeling today?',
                    label: 'Feeling?',
                    actionType: 'FEELING_INPUT'
                });
                break;
        }
    }

    render () {
        return (
            <>
                <h2>{this.state.header}</h2>
                <br/>
                <label for='inputField'>{this.state.label}</label>
                <br/>
                <input type='number' placeholder='0-10'></input>
                <button>Next</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(InputPage);