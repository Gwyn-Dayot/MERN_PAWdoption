import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AnimalCard({ animal }) {
    return (
        <Card className="shadow-sm h-100">
            <Card.Img variant="top" src={animal.image} style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>{animal.breed}</Card.Text>
                <Card.Text>{animal.age} years old</Card.Text>
                <Button as={Link} to={`/animals/${animal.id}`} variant="primary" className="mt-auto">
                    View Details
                </Button>
            </Card.Body>
        </Card>
    );
}

export default AnimalCard;