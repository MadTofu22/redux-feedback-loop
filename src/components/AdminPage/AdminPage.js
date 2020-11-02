import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Table} from '@material-ui/core';
import {connect} from 'react-redux';
import axios from 'axios';

class AdminPage extends Component {

    state = {
        feedbackData: []
    }

    componentDidMount () {
        // Get the data from the DB
    }

    // Conect to the server and get the feedback data
    getFeedbackData = () => {

    }

    render () {
        return (
            <>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const AdminPageWithRouter = withRouter(AdminPage);
export default connect(putReduxStateOnProps)(AdminPageWithRouter);