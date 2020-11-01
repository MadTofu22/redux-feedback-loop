import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class ThanksPage extends Component {

    state = {
        feedbackData: []
    }

    

    render () {
        return (
            <>
                
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const ThanksPageWithRouter = withRouter(ThanksPage);
export default connect(putReduxStateOnProps)(ThanksPageWithRouter);