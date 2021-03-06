import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignApp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {createUserProfileDocument, auth} from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {
  

  unsbscirbeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsbscirbeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          
        });
      }else{
        setCurrentUser(userAuth);
      }
    });
  };
  componentWillUnmount(){
    this.unsbscirbeFromAuth();
  }

  
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  exact path='/checkout' component={CheckoutPage}/>

          <Route exact path='/signin' render = {() => 
            this.props.currentUser ?
             (<Redirect to='/' />) :
              (<SignInAndSignApp/>)} />
  
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
