import { MantineProvider, Paper } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import './App.module.css'
import AABB from "./pages/AABB.tsx";
import LinkedLists from './pages/LinkedLists.tsx';
import BinarySearch from './pages/BinarySearch.tsx';
import Huffman from './pages/Huffman.tsx';
import Graphs from './pages/Graphs.tsx';
import StateMachine from './pages/StateMachine.tsx';
import Voroni from './pages/Voroni.tsx';
import Hashes from './pages/Hashes.tsx';
import HomePage from './pages/HomePage.tsx'
// import AppShellExample
//  from "./components/AppShell.tsx";
function App() {



  return (
    <>
      <MantineProvider >
        <Paper>
        {/* <AppShellExample/> */}
        </Paper>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/AABB" element={<AABB/>} />
          <Route path="/LinkedLists" element={<LinkedLists/>} />
          <Route path="/BinarySearch" element={<BinarySearch/>} />
          <Route path="/Huffman" element={<Huffman/>} />
          <Route path="/Graphs" element={<Graphs/>} />
          <Route path="/StateMachine" element={<StateMachine/>} />
          <Route path="/Voroni" element={<Voroni/>} />
          <Route path="/Hashes" element={<Hashes/>} />
        </Routes>
      </MantineProvider>
    </>
  )
}

export default App
