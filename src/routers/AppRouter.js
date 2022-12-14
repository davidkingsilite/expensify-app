import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history = {history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />  
            <PrivateRoute path="/create" component={AddExpensePage} /> 
            <PrivateRoute path="/edit/:id" component={EditExpensePage} /> 
            <Route path="/help" component={HelpPage} /> 
            <Route component={NotFoundPage}  /> 
          </Switch>  
        </div>
    </Router>
);

export default AppRouter;