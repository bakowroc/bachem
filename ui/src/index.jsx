import 'normalize.css';
import 'typeface-roboto';
import './styles/global.scss';

import {h, render} from 'preact';
import {App} from "./components/App";

render(
  <App />,
  document.getElementById('root')
);