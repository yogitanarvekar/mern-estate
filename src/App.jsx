import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

export default function App() {
  return <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
  </Routes>
  </BrowserRouter>;
  
}
