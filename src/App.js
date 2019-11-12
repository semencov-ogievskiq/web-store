import React from "react";
//Подключаем роутинг, используется для перехода по страницам
import { BrowserRouter as Router} from "react-router-dom";
//React компонент шапки сайта
import Header from "./components/header.js";
//React компонент тела сайта
import Main from "./components/main.js";
//React компонент подвала сайта
import Footer from "./components/footer.js";
//React компонент с модальными окнами
import Modals from "./components/modals.js";

const App = ()=>{
  return(    
    <Router>
      <Header/>
      <Main/>
      <Footer/>
      <Modals/>
    </Router>
  )
}


export default App