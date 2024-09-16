import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Header } from './header.jsx';
// import {User} from './User.jsx';
import App from './app.js';


// const main = {
//   background:'blue',
//   width:'100%',
//   height:'100vh'
// }

// const firstvariable ="Expert"
// const secondvariable = "Devloper"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div style={main}>
  //   <h1>hello </h1>
  // </div>

  // <h1>we are {firstvariable} {secondvariable}</h1>
  // <h1>{ `we are ${firstvariable} ${secondvariable}`}</h1>

  // <div>
  // <Header />
  // </div>
  // <div>
  // <User name="Raj" expertise="fronted Devloper" />
  // </div>

  <>
  <App /> 
  </>
);



