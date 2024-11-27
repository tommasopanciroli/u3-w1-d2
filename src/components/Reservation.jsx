import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// name -> string
// phone -> number
// numberOfPeople -> number
// smoking -> boolean
// dateTime -> date string (ISO format)
// specialRequests -> string

// ogni volta che un componente React deve interagire con un form, questo componente deve possedere uno STATE

class Reservation extends Component {
  state = {}

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome prenotazione</Form.Label>
          <Form.Control type="text" placeholder="Mario Rossi" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Numero di telefono</Form.Label>
          <Form.Control type="text" placeholder="333xxxxx" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Per quanto persone</Form.Label>
          <Form.Select aria-label="Numero di persone">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Tavolo all'esterno?" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>A che ora?</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="12.00"
            required
            min={`${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}T00:00`}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Allergie, richieste particolari</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default Reservation
