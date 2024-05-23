import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommitteePage from './pages/CommitteePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/committee" component={CommitteePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default App;