import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class ReviewPage extends Component {

    submitFeedback = () => {
        axios.post('/feedback', this.props.reduxState.feedbackReducer).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    render () {
        const feedback = this.props.reduxState.feedbackReducer;

        return (
            <>
                <h2>Review Your Feedback</h2>
                <h4>Feelings: {feedback.feeling}</h4>
                <h4>Understanding: {feedback.understanding}</h4>
                <h4>Support: {feedback.support}</h4>
                <h4>Comments: {feedback.comments}</h4>
                <button onClick={this.submitFeedback}>Submit</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const ReviewPageWithRouter = withRouter(ReviewPage);
export default connect(putReduxStateOnProps)(ReviewPageWithRouter);