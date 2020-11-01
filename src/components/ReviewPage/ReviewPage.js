import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ReviewPage extends Component {

    render () {
        return ();
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const ReviewPageWithRouter = withRouter(ReviewPage);
export default connect(putReduxStateOnProps)(ReviewPageWithRouter);