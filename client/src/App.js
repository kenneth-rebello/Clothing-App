import React from 'react';
import { Route,Switch,BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';

import Header from './components/header/Header';
import Homepage from './components/home/Homepage';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';

import {auth, createUserProfile} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/actions/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = undefined;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
        this.props.setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();

  }

  render(){
    
    const {currentUser} = this.props;

    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path="/signin" render={()=> currentUser ? (<Redirect to="/"/>):<Auth/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
