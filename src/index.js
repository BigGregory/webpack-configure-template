import { config } from './modules/config';
import './modules/header.component';
import './css/styles.css';
import './less/index.less';
import './scss/index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

console.log('Config key:', config.key);

render(<App />, document.getElementById('root'))