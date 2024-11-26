import { Carousel } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'

const MainCarouselContent = () => {
  return (
    <Carousel>
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
  )
}

export default MainCarouselContent
