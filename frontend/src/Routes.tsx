import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import { Home, Login, SignUp, Protected, PrivateRoute } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';

// import Footer from './components/Footer';
// import Header from './components/Header';
// import Base from './components/Base';

//import { Header, Base, Footer } from './components';

// Importing all components
import * as SF from './components';


const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
    backgroundColor: 'teal',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export const Routes: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin">
         <Admin />
      </Route>
      <div className={classes.app}>
          <SF.Header />

          <SF.Base />
          <SF.Footer />
      </div>

    </Switch>
  );

  // return (
  //   <Switch>
  //     <Route path="/admin">
  //       <Admin />
  //     </Route>

  //     <div className={classes.app}>
  //       <header className={classes.header}>
  //         <Route path="/login" component={Login} />
  //         <Route path="/signup" component={SignUp} />
  //         <Route
  //           path="/logout"
  //           render={() => {
  //             logout();
  //             history.push('/');
  //             return null;
  //           }}
  //         />
  //         <PrivateRoute path="/protected" component={Protected} />
  //         <Route exact path="/" component={Home} />
  //       </header>
  //     </div>
  //   </Switch>
  // );
};
