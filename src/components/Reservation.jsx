import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// name -> string
// phone -> number
// numberOfPeople -> number
// smoking -> boolean
// dateTime -> date string (ISO format)
// specialRequests -> string

// ogni volta che un componente React deve interagire con un form, questo componente deve possedere uno STATE

// two-way data binding tra lo stato del componente e i campi del form

class Reservation extends Component {
  // lo scopo di oggi è capire come lavorare con i form in react
  // se prima (in JS) raccoglievamo i valori del campo del form solamente alla fine della compilazione, o alla presione di submit
  //ora con React il componente sarà sempre in pieno controllo del contenuto del form, man mano che l'utente lo compilerà.
  // Arrivati alla fine del form, il componetne avrà già raccolto tutti i dati e dovrà solaemnte inviarli con la chiamata del post.
  // Raggiungeremo questo obiettivo creando un collegando a due vie su ogni campo del form, collegandolo alla corrispondente
  // proprietà di reservation nello state.

  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: '1',
      smoking: false,
      dateTime: '',
      specialRequest: '',
    },
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome prenotazione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mario Rossi"
            required
            // prima freccia
            value={this.state.reservation.name}
            // seconda freccia
            onChange={
              //qua devo fare una funzione che in base a quello che ho scitto setti il valore di this.state.reservation.name
              (e) => {
                console.log('THIS', this)

                this.setState({
                  reservation: {
                    ...this.state.reservation,
                    name: e.target.value,
                  },
                })
              }
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Numero di telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="333xxxxx"
            required
            value={this.state.reservation.phone}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  phone: e.target.value,
                },
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Per quanto persone</Form.Label>
          <Form.Select
            aria-label="Numero di persone"
            value={this.state.reservation.numberOfPeople}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  numberOfPeople: e.target.value,
                },
              })
            }}
          >
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
          <Form.Check
            type="checkbox"
            label="Tavolo all'esterno?"
            checked={this.state.reservation.smokinh}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  smoking: e.target.checked,
                },
              })
            }}
          />
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
            value={this.state.reservation.dateTime}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  dateTime: e.target.value,
                },
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Allergie, richieste particolari</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={this.state.reservation.specialRequest}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  specialRequest: e.target.value,
                },
              })
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia prenotazione
        </Button>
      </Form>
    )
  }
}

export default Reservation
