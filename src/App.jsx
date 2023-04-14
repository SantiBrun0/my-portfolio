import Contacto from "./components/Contacto"
import Header from "./components/Header"
import Home from "./components/Home"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/SobreMi"


function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </div>
  )
}

export default App
