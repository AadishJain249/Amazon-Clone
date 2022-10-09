import './App.css';
import Payment from './Payment/Payment';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {React,useEffect} from 'react'
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider/StateProvider';
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

function App() {
  const [dispatch]=useStateValue()
  const promise = loadStripe(
    "pk_test_51LqrtKSDl8Bf4BRHpuJij2XtZBem6jNs8AyELJLRe0X40k3fL5cB8YjyBtKC91VsVglQ23Sk7xwSk6FqRFr95lqv00j82OozCH"
  );
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // router act as a wrapper parent element
    // we can use router  anywhere
    <Router> 
    <div className="App">
    <Switch>
    <Route path="/checkout">
          <Header></Header>
          <Checkout></Checkout>
    </Route>

    <Route path="/login">
    <Login></Login>
    </Route>

    <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment></Payment>
        </Elements>
    </Route>    
    
    <Route path="/">
        <Header/>
        <Home></Home>
    </Route>
        
    </Switch>
    </div>
      </Router>
  );
}

export default App;
