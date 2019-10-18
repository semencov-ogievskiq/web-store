import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header.js";
import { connect } from "react-redux";
//Компанент дает возможность видеть redux store

import Test from "./page/test"


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(    
      <Router>
        <Header/>
        <Test/> 
      </Router>
    )
  }
};

export default connect(
  state=>{return state},
  null 
)(App);
// export default AddTodo;