import './App.css'
import { Home } from "@/pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import {TheForm} from "components/Form/TheForm.tsx";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form" element={<TheForm />} />
        </Routes>

      </>
  )
}

export default App
