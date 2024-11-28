import './App.css'
import Corusel from './components/Corusel';
import Header from "./components/Header"
import Section from './components/Section'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Prodact from './components/Prodact';

function App() {

  return (
    <>
      <Header/>
      <Prodact/>
      {/* <Corusel/> */}
      {/* <Section/> */}
      <ToastContainer/>
    </>
  )
}

export default App

