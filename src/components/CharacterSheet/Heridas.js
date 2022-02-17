import { Card } from "react-bootstrap"

const Heridas = (props) =>{
return(
    <Card className="bg-dark ">
            <Card.Title className="text-center text-white">
              Heridas
            </Card.Title>
            <Card.Body className="text-center bg-light ">{props.heridas}</Card.Body>
          </Card>
)
}
export default Heridas