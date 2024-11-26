import { Carousel, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { Component } from 'react'

class MainContent extends Component {
  state = {
    activePasta: pastasciutte[0],
  }

  render() {
    return (
      <>
        <Carousel
          onSlid={(index) => {
            console.log('SLIDE CAMBIATA', index)
            // teniamo aggiornato lo "STATE"
            this.setState({
              // questo oggetto verrà fuso, "mergiato" lo stato corrente
              activePasta: pastasciutte[index],
              // aggiorno l'activepasta con l'oggetto corrispondente al numero della slide visualizzata
            })
          }}
        >
          {pastasciutte.map((pasta) => {
            return (
              <Carousel.Item key={pasta.id}>
                <img src={pasta.image} alt="img" className="img-fluid" />
                <Carousel.Caption>
                  <h3>{pasta.name}</h3>
                  <p>{pasta.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8} lg={6}>
            <ListGroup>
              {this.state.activePasta.comments.map((recensione) => {
                return (
                  <ListGroupItem key={recensione.id}>
                    {recensione.author} voto {recensione.rating} -{' '}
                    {recensione.comment}
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </>
    )
  }
}

export default MainContent
