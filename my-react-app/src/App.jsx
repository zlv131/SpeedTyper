import './App.css'
import CardMenu from "./components/card-menu/CardMenu.jsx";
import Header from "./components/header/Header.jsx";
import {Route, Routes, Link} from "react-router-dom";
import Rules from "./components/rules/Rules.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper__app">
      <Routes>
        <Route path={'/'} element={<Header/>}>
          <Route index element={<CardMenu/>}/>
          <Route path={'rules'} element={<Rules/>}/>
        </Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
