import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Services } from './components/Services';
import { ShowCase } from './components/ShowCase';
import { SignUp } from './components/SignUp';

const App = () => {
    return (
        <div>
            
                <Router>
                    
                        <Header />
                    <Route exact path='/'>
                        <ShowCase />
                        <Services />
                    </Route>
                    
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    
                        <Footer />
                    
        
                </Router>
            
           
        </div>
    )
}
export default App