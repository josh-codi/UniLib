import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Register from './components/SignUp/Register';
import Login from './components/SignUp/Login';
import VerifyEmail from './Home_Content/VerifyEmail';
// import BackgroundAnimation from './BackgroundAnimation';


const App = () => {

    return (        
        <div>
            
             
        <Router>
            
            
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path="/about" component={About} />
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/verifyemail" component={VerifyEmail} />
                </Switch>
                        
        </Router>
        </div>
    );
    
}



export default App;