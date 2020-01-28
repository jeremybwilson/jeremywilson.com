import { run } from "./app.js";
import { AlertService } from "./alert.service";
import { ComponentService } from "./component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

import '../css/variables.scss';
import '../css/theme.scss';

import brushLogo from '../images/logo_brush.png';
import cssLogo from '../images/logo_css.png';
import htmlLogo from '../images/logo_html.png';
import jsLogo from '../images/logo_js.png';
import seattleSkyline from '../images/seattle_skyline.png';
import webpackLogo from '../images/webpack.svg';

const writeYear = () => {
  const fullYear = new Date();
  const currentYear = fullYear.getFullYear();
  // find element to insert current year into
  const yearSpan = document.querySelector('.current-year');
  // insert current year into element
  yearSpan.innerHTML = `${currentYear}`;
}
console.log(`Writing in the year here`);
writeYear();

// import practiceStuff from "./practice";

let myName = 'Jeremy';
console.log(`Hello ${myName}!`);
