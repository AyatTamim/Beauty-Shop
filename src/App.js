
import './App.scss';
import { Tex } from 'react-tex';
import TestOne from "./components/TestOne";
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Latex from "react-latex"
import Home from "./components/Nav"
import TaskProducts from './components/TaskProducts';
import { createContext, useState, Context } from 'react';
import Header from './components/Header';
import Main from "./components/Main.tex";
export const ThemeContext = createContext();
export const ProductContext = createContext();


function App() {

  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  let [product, setProduct] = useState((0));
  const handleproduct = () => {
    setProduct(++product)

  }
  return (
    <>
    
      <ThemeContext.Provider value={theme}>
        <h1>{theme}</h1>
        <button onClick={handleTheme}>7aga</button>
        <Header />
      </ThemeContext.Provider>
      <ProductContext.Provider value={theme}>
        <h1>{theme}</h1>
        <button onClick={handleproduct}>{product}</button>
        <Header />
      </ProductContext.Provider>
    </>
  );
}
export default App;
