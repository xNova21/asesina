import {Card, ListGroup} from "react-bootstrap";

const Description = (props) =>{
  let descripcion = props.descripcion
    return(
        <Card className="bg-dark text-white">
            <Card.Title className="text-center ">DESCRIPCION</Card.Title>
            <ListGroup>
              {descripcion.map((carac) => {
                carac = carac[0].toUpperCase() + carac.substring(1);
                return <ListGroup.Item key={carac}>{carac}</ListGroup.Item>;
              })}
            </ListGroup>
          </Card>
    )
}
export default Description