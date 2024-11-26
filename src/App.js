import './App.css'
// allego il foglio di bootstrap una volta per tutte
import 'bootstrap/dist/css/bootstrap.min.css'
import ResponsiveNavbar from './components/ResponsiveNavbar'
import MainCarouselContent from './components/MainCarouselContent'
import { Col, Container, Row } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveNavbar subtitle="Pastasciutte sul web" isFluid={true} />
      </header>
      <main>
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6}>
              <MainCarouselContent />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App
