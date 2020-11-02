import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';
import {connect} from 'react-redux';
import axios from 'axios';

class AdminPage extends Component {

    state = {
        feedbackData: [],
        rowParams: [],
        btnDisabled: true
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

    // This function updates the local state with the selected entries
    handleRowSelection = (rowParams) => {
        let btnDisabled = rowParams.length === 0 ? true : false;
        this.setState({
            ...this.state,
            rowParams,
            btnDisabled
        });
    }

    // This function removes the selected entries from the DB then refreshes the table
    deleteSelected = () => {
        let confirmation = window.confirm('Are you sure you want to delete the selected entries?');

        if (confirmation){
            for (let row of this.state.rowParams) {
                axios.delete(`/feedback/${row.id}`).then(response => {
                    console.log(response);
                    this.getFeedbackData();
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }

    // This function updates flagged column for the selected feedback entries then refreshes the table
    updateSelected = () => {
        let confirmation = window.confirm('Are you sure you would like to mark the selected entries for later review?');

        if (confirmation) {
            for (let row of this.state.rowParams)
            axios.put(`/feedback/${row.id}`).then(response => {
                console.log(response);
                this.getFeedbackData();
            }).catch(error => {
                console.log(error);
            });
        }
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
                <Button variant="contained" color="primary" onClick={this.updateSelected} disabled={this.state.btnDisabled}>Mark Selected For Review</Button>
                
                <Button variant="contained" color="secondary" onClick={this.deleteSelected} disabled={this.state.btnDisabled}>Delete Selected</Button>

                <section className="adminData">
                    <DataGrid autoPageSize={true} columns={columns} rows={this.state.feedbackData} pageSize={10} checkboxSelection showColumnRightBorder onSelectionChange={params => this.handleRowSelection(params.rows)}/>
                </section>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
const AdminPageWithRouter = withRouter(AdminPage);
export default connect(putReduxStateOnProps)(AdminPageWithRouter);