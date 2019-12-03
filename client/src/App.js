import React from 'react';
import { Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Homepage from './components/home/Homepage';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser: undefined
    }
  }

  unsubscribeFromAuth = undefined;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

      this.setState({currentUser:user});

    });
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();

  }

  render(){
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path="/signin" component={Auth}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
