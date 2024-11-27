import './App.css'
// allego il foglio di bootstrap una volta per tutte
import 'bootstrap/dist/css/bootstrap.min.css'
import ResponsiveNavbar from './components/ResponsiveNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import MainContent from './components/MainContent'
import Reservation from './components/Reservation'

function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveNavbar subtitle="Pastasciutte sul web" isFluid={true} />
      </header>
      <main>
        <Container>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={8} lg={6}>
              <Reservation />
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={8} lg={6}>
              <MainContent />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App
