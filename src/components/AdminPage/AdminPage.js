import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';
import {connect} from 'react-redux';
import axios from 'axios';

class AdminPage extends Component {

    state = {
        feedbackData: []
    }

    componentDidMount () {
        this.getFeedbackData();
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

        const columns = [
            {field: 'feeling', headerName: 'Feeling', width: 100},
            {field: 'understanding', headerName: 'Understanding', width: 150},
            {field: 'support', headerName: 'Support', width: 100},
            {field: 'comments', headerName: 'Comments', width: 200},
            {field: 'flagged', headerName: 'Review?', width: 100}
        ];

        return (
            <>
                <div className="adminData">
                    <DataGrid autoPageSize={true} columns={columns} rows={this.state.feedbackData} pageSize={10} checkboxSelection showColumnRightBorder />
                </div>
                <Button variant="contained" color="primary" onClick={this.markForReview}>Mark Selected For Review</Button>
                <Button variant="contained" color="secondary" onClick={this.deleteSelected}>Delete Selected</Button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const AdminPageWithRouter = withRouter(AdminPage);
export default connect(putReduxStateOnProps)(AdminPageWithRouter);