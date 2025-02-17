import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/events/:id" component={EventDetail} />
          <Route path="/create-event" component={CreateEvent} />
          <Route path="/" component={EventList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;