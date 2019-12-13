import React, {useEffect} from 'react';
import { Route,Switch,BrowserRouter as Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/utils/header/Header';
import Homepage from './components/home/Homepage';
import Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';
import Checkout from './components/checkout/Checkout';

import { GlobalStyle } from './App.styles';

import {auth, createUserProfile} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/actions/user.actions';
import { selectCurrentUser } from './redux/selectors/user.selector';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";

const App = ({currentUser, setCurrentUser}) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
          
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <Router>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={Shop}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route path="/signin" render={()=> currentUser ? (<Redirect to="/"/>):<Auth/>}/>
        </Switch>
      </Router>
    </div>
  );
  
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);