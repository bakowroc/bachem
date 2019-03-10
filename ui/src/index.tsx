import 'normalize.css';
import './styles/global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";
import {AppProvider} from "./context/AppProvider";

const AppWithProvider = (
  <AppProvider>
    <App />
  </AppProvider>
);

ReactDOM.render(
  AppWithProvider,
  document.getElementById('root')
);