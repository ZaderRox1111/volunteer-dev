import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home.js';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
    </Switch>
  );
}

export default Main;