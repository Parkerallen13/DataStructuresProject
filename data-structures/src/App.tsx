import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Ds1 from "./pages/ds1.tsx";
import Ds2 from './pages/ds2.tsx';
import Ds3 from './pages/ds3.tsx';
import Ds4 from './pages/ds4.tsx';
import Ds5 from './pages/ds5.tsx';
import Ds6 from './pages/ds6.tsx';
import Ds7 from './pages/ds7.tsx';
import Ds8 from './pages/ds8.tsx';
import HomePage from './pages/HomePage.tsx'
function App() {

  return (
    <>
      <MantineProvider>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/Ds1" element={<Ds1/>} />
          <Route path="/Ds2" element={<Ds2/>} />
          <Route path="/Ds3" element={<Ds3/>} />
          <Route path="/Ds4" element={<Ds4/>} />
          <Route path="/Ds5" element={<Ds5/>} />
          <Route path="/Ds6" element={<Ds6/>} />
          <Route path="/Ds7" element={<Ds7/>} />
          <Route path="/Ds8" element={<Ds8/>} />
        </Routes>
      </MantineProvider>
    </>
  )
}

export default App
