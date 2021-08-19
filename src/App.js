import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Checking from './Checking'
import Register from './components/SignUp/Register';
import Search from './Home_Content/Search/Search'

const App = () => {

    return (        
        <div>
            
        <Router>            
            <Navbar/>
            <Search/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path="/about" component={About} />
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Checking}/>
                </Switch>
            <Footer/>            
        </Router>
        
        </div>
    );
    
}



export default App;