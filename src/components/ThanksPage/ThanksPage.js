import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class ThanksPage extends Component {

    // state = {
    //     feedbackData: []
    // }

    // getFeedback = () => {
    //     axios.get('/feedback').then(response => {
    //         this.setState({
    //             feedbackData: response.data
    //         });
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    // This function handles the click event for the leave new feedback button
    handleClick = () => {
        this.props.dispatch({type: 'CLEAR_STATE'});
        this.props.history.push('/feeling');
    }

    render () {
        return (
            <>
                <h2>Thank You!</h2>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const ThanksPageWithRouter = withRouter(ThanksPage);
export default connect(putReduxStateOnProps)(ThanksPageWithRouter);