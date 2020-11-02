import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {Button, Card, CardHeader, CardContent, Typography, styled} from '@material-ui/core';

const ReviewCard = styled(Card)({
    background: 'rgba(155, 18, 219, .8)',
    width: '20%',
    height: '100%',
    borderRadius: 15,
    margin: '2.5%'
});

class ReviewPage extends Component {

    submitFeedback = () => {
        axios.post('/feedback', this.props.reduxState.feedbackReducer).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
        this.props.history.push('/thanks');
    }

    render () {
        const feedback = this.props.reduxState.feedbackReducer;

        return (
            <>
                <h2>Review Your Feedback</h2>
                <ReviewCard variant="outlined">
                    <CardContent>
                        <h3>Feelings: </h3><br/>
                        <h4>{feedback.feeling}</h4>
                    </CardContent>
                </ReviewCard>
                <h4>Understanding: {feedback.understanding}</h4>
                <h4>Support: {feedback.support}</h4>
                <h4>Comments: {feedback.comments}</h4>
                <button onClick={this.submitFeedback}>Submit</button>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const ReviewPageWithRouter = withRouter(ReviewPage);
export default connect(putReduxStateOnProps)(ReviewPageWithRouter);