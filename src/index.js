import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import Top from './components/Top';
import Picture_social from './components/Picture_social';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Interest from './components/Interest';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Top/>
    </header>
    <main>
      <Picture_social/>
      <Education/>
      <Portfolio/>
      <Interest/>
    </main>
    <footer>

    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

