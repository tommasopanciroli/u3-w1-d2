import './App.css'
// allego il foglio di bootstrap una volta per tutte
import 'bootstrap/dist/css/bootstrap.min.css'
import ResponsiveNavbar from './components/ResponsiveNavbar'

function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveNavbar subtitle="Pastasciutte sul web" isFluid={true}/>
      </header>
    </div>
  )
}

export default App
