import { Box } from '@mui/material';
import './App.css';
import Home from './components/Home';
import SecondSection from './components/SecondSection';
import { useRef } from 'react';
import { MyContext } from './components/MyContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  const scrollTo = (index) => {
    if (sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box className="App">
      <MyContext.Provider value={{ sectionRefs, scrollTo }}>
        <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </Box>
  );
}

export default App;
