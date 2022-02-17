import { Card } from "react-bootstrap"

const Drama = (props) =>{
return(
    <Card className="bg-dark ">
            <Card.Title className="text-center text-white">
              PUNTOS DE DRAMA
            </Card.Title>
            <Card.Body className="text-center bg-light ">{props.drama}</Card.Body>
          </Card>
)
}
export default Drama