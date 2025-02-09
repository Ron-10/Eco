import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.tsx";
import Calculator from "./pages/Calculator.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Rewards from "./pages/Rewards.tsx";

import About from "./pages/About.tsx";
import FAQ from "./pages/FAQ.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH='100vh' display='flex' flexDirection='column'>
          <Navbar />
          <Box flex='1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/rewards' element={<Rewards />} />
              <Route path='/about' element={<About />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
