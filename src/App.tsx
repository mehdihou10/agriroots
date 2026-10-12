import { Route,Routes } from "react-router-dom"
import { About, Home,Products,Contact } from "./pages"
import { Header } from "./components"

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
    
  )
}

export default App
