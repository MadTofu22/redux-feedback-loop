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
    margin: '1%'
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
                <section className="reviewCards">
                    <ReviewCard variant="outlined">
                        <CardContent>
                            <h3>Feelings:</h3><br/>
                            <h4>{feedback.feeling}</h4>
                        </CardContent>
                    </ReviewCard>
                    <ReviewCard variant="outlined">
                        <CardContent>
                            <h3>Understanding:</h3><br/>
                            <h4>{feedback.understanding}</h4>
                        </CardContent>
                    </ReviewCard>
                    <ReviewCard variant="outlined">
                        <CardContent>
                            <h3>Support:</h3><br/>
                            <h4>{feedback.support}</h4>
                        </CardContent>
                    </ReviewCard>
                    <ReviewCard variant="outlined">
                        <CardContent>
                            <h3>Comments:</h3><br/>
                            <p>{feedback.comments}</p>
                        </CardContent>
                    </ReviewCard>
                </section>
                <Button variant="contained" size="large" color="secondary" onClick={() => this.props.history.goBack()}>Back</Button>
                <Button variant="contained" size="large" color="primary" onClick={this.submitFeedback}>Submit</Button>
                
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const ReviewPageWithRouter = withRouter(ReviewPage);
export default connect(putReduxStateOnProps)(ReviewPageWithRouter);