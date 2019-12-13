import React, {useEffect, lazy, Suspense } from 'react';
import { Route,Switch,BrowserRouter as Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/utils/header/Header';
import Spinner from './components/with-spinner/Spinner';

import { GlobalStyle } from './App.styles';

import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import {auth, createUserProfile} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/actions/user.actions';
import { selectCurrentUser } from './redux/selectors/user.selector';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";

const Homepage = lazy(() => import('./components/home/Homepage'));
const Shop = lazy(()=> import('./components/shop/Shop'));
const Checkout = lazy(() => import('./components/checkout/Checkout'));
const Auth = lazy(() => import('./components/auth/Auth'));

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
              <Route exact path="/" component={Homepage}/>
              <Route path="/shop" component={Shop}/>
              <Route exact path="/checkout" component={Checkout}/>
              <Route path="/signin" render={()=> currentUser ? (<Redirect to="/"/>):<Auth/>}/>
            </Suspense>
          </ErrorBoundary>
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