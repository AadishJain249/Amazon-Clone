import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {React,useEffect} from 'react'
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider/StateProvider';
function App() {
  const [{basket,user},dispatch]=useStateValue()
  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser=>{
  //     console.log("user is",authUser);
  //     if(authUser)
  //     {
  //       // USER IS LOGGED IN
  //       dispatch({
  //         type:'SET_USER',
  //         user:authUser
  //       })
  //     }
  //     else
  //     {
  //         dispatch({
  //         type:'SET_USER',
  //         user:null // bcs user is logged out to user null rhega
  //         })  
  //     }
  //   })
  // }, [])
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
