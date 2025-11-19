import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { Container, Card } from "react-bootstrap";
import Footer from '../components/Footer';

function AnimalDetails() {
    const { id } = useParams();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        axiosClient.get(`/animals/${id}`).then((response) => setAnimal(response.data));
    }, [id]);

    if (!animal) return <p className="container py-4">Loading...</p>;

    return (
        <div className="d-flex flex-column min-vh-100">
            <Container className="py-4">
                <Card>
                    <Card.Img src={animal.image}/>
                    <Card.Body>
                        <Card.Title>{animal.name}</Card.Title>
                        <Card.Text>{animal.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </div>
    );
}

export default AnimalDetails;