import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Paginas
import Home from "./pages/home/home"
import UserPage from "./pages/userPage/userPage"
import ErrorPage from "./pages/errorPage/ErrorPage"

// Components
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/user" element={<UserPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
