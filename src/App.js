import logo from './logo.svg';
import './index.css';
import Container from './HomeComponents/Container';
import React from 'react';
import { Route, Router, Link } from "react-router-dom";

// function App() {
//   return (
//         <Router>
//             <Router exact path="/" component={Container} />
//         </Router>
//   );
// }

function App() {
  return (
    <Container/>
  );
}

export default App;
