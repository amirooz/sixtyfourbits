import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Home from './components/dashboard/Index'
import Footer from './components/layouts/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>

    );
}

export default App;