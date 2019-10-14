import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header.js";
//Компанент дает возможность видеть redux store
//import { Provider } from 'react-redux'
//Тут находиться магазин redux
//import store from './store'


export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>

          <Header/>

      </Router>
    )
  }
};
