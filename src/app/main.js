import { run } from "./app.js";
import { AlertService } from "./alert.service";
import { ComponentService } from "./component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

import '../css/variables.scss';
import '../css/theme.scss';

let myName = 'Jeremy';
console.log(`Hello ${myName}!`);

import { groupBy } from 'lodash-es';
import people from './people';

// const appName = 'Webpack Demo App';
// setTimeout(
//   () => console.log(`Thanks for using ${appName}`
// ), 500);
// console.log("Hello webpack. Demo works");

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

// const managerGroups = groupBy(people, 'manager');
// console.log(groupBy(people, 'manager'));
// const root = document.createElement('div');
// root.innerHTML = `<p>Hello Webpack.</p>`;
// root.innerHTML += `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
// document.body.appendChild(root);

// import practiceStuff from "./practice";

const names = ["Alex", "Anika", "Jeremy"];

const fullNames = names.map(function(name){
  return `${name} Wilson`;  // Explicit return
});

const fullNames2 = names.map((name) => {
  return `${name} Wilson`;  // Explicit return
})

const fullNames3 = names.map(name => {
  return `${name} Wilson`;  // Explicit return
});

const fullNames4 = names.map(name => `${name} Wilson`);  // Implicit return

const fullNames5 = names.map(() => `Cool Wilson`);

console.log(fullNames5);

// function sayMyName(name){
//   console.log(`Hello ${name}`);
// }

// function declaration
  // anonymous function
// const sayMyName = (name) => {
//   console.log(`Hello ${name}`);
// }

// sayMyName('Jeremy');



