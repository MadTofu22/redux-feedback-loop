import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import InputPage from '../InputPage/InputPage';
import ReviewPage from '../ReviewPage/ReviewPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path='/'><Link to='/feeling'><button>Get Started</button></Link></Route>
          <Route path='/feeling' component={() => {return <InputPage page='feeling'/>}}></Route>
          <Route path='/understanding' component={() => {return <InputPage page='understanding'/>}}></Route>
          <Route path='/support' component={() => {return <InputPage page='support'/>}}></Route>
          <Route path='/comments' component={() => {return <InputPage page='comments'/>}}></Route>
          <Route path='/review' component={ReviewPage}></Route>
        </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
export default connect(putReduxStateOnProps)(App);