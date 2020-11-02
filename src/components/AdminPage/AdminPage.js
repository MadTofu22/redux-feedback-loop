import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Table} from '@material-ui/core';
import {connect} from 'react-redux';
import axios from 'axios';

class AdminPage extends Component {

    state = {
        feedbackData: []
    }

    // Conect to the server and get the feedback data
    getFeedbackData = () => {
        axios.get('/feedback').then(response => {
            console.log(response.data);
            this.setState({
                feedbackData: response.data
            });
        }).catch(error => {
            console.log(error);
        });
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