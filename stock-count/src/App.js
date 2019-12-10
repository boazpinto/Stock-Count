import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Unit from '../src/Unit';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <Switch> 
      <Route exact path="/"> 
      <Unit 
        color="Green" 
        header="CityTime" 
        line1="Pandora" 
        line2="Tommy Hilfiger" 
        line3="Parfois" 
        pic="https://media.licdn.com/dms/image/C4D0BAQHNR7cDRCKldQ/company-logo_200_200/0?e=2159024400&v=beta&t=d0c-E24gHdgClmB7d1wjzoQtiiW8gbZjAjzd5uHTZE0">
      </Unit>
      <Unit 
        color="yellow" 
        header="79432p" 
        line1="Bracelet Shosahanim" 
        line2="Pandora" 
        quantity="5"
        pic="https://images-na.ssl-images-amazon.com/images/I/71tZVFOw-tL._UY575_.jpg">
      </Unit>
      <Unit 
        color="red" 
        header="Ramat Aviv Mall" 
        line1="Ramat Aviv Mall" 
        line2="einshtein, tel aviv" 
        line3="5" 
        pic="https://lh3.googleusercontent.com/p/AF1QipMjBDgLlQBGrKUlMFk0119QCUpGXZE4Head3wtl=s1600-w1280-h1280">
      </Unit>
       </Route> 
    </Switch>
  );
}

export default App;
