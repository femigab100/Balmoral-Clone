import Home from "./Components/Home"
import Villa from "./Pages/Villa"
import Federal from "./Pages/Federal"
import Sheraton from "./Pages/Sheraton"
import Oregun from "./Pages/Oregun"
import Palace from "./Pages/Palace"
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Villa" element={<Villa/>} />
            <Route path="/Federal" element={<Federal/>} />
            <Route path="/Sheraton" element={<Sheraton/>} />
            <Route path="/Oregun" element={<Oregun/>} />
            <Route path="/Palace" element={<Palace/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
