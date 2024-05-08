import { Box } from '@mui/material';
import './App.css';
import Home from './components/Home';
import { useRef, useState } from 'react';
import { MyContext } from './components/MyContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ProjectDetails from './components/ProjectDetails';

function App() {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  const [ success, setSuccess ] = useState(false);

  const scrollTo = (index) => {
    if (sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box className="App">
      <MyContext.Provider value={{ sectionRefs, scrollTo, success, setSuccess }}>
        <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/details/:cardId" element={<ProjectDetails />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </Box>
  );
}

export default App;
