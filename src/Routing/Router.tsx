import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../screens/Landing/Landing';

export default () => (
  <BrowserRouter>
    <Route exact={true} component={Landing} />
  </BrowserRouter>
);
