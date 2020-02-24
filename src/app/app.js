/***
 * QUICKSTART :
 *    Replace "<ExampleApp />" with your first parent component
 *    and you're ready to start creating!
 ***/
import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from "./components/Router";

import "../css/theme.scss";   //Bundled Styles - TELLS WEBPACK TO BUILD STYLES - DO NOT REMOVE
// require( "../css/theme.scss" ); //Bundled Styles - TELLS WEBPACK TO BUILD STYLES - DO NOT REMOVE

import './main.js';

render(<Router/>, document.querySelector('#react-root'));
