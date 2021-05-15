import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTER } from 'src/constants';
import Home from 'src/pages/home';
import IssueDetail from 'src/pages/issue-detail';

const Routes: React.FC = () => {
  const renderDashboard = () => {
    return <Redirect to={'/'} />;
  };

  return (
    <Router>
      <Switch>
        <Route path={ROUTER.home} exact={true} component={Home} />
        <Route path={ROUTER.issueDetail} exact={true} component={IssueDetail} />
        <Route path={ROUTER.other} render={renderDashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
