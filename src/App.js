import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/public/layouts/Navbar';
import Home from './components/public/Index'
import About from './components/public/About'
import Contact from './components/public/Contact'
import Expertise from './components/public/Expertise'
import Footer from './components/public/layouts/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/expertise" component={Expertise} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>

    );
}

export default App;