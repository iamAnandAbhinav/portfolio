import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactMe from './components/contactMe';
import Home from './components/home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contactme" element={<ContactMe />} /> 
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
