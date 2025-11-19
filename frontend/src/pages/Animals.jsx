import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import AnimalCard from "../components/AnimalCard";
import Footer from '../components/Footer';
import { Container, Row, Col } from "react-bootstrap";

function Animals() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axiosClient.get("/animals")
            .then((response) => setAnimals(response.data));
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Container className="py-4">
                <Row>
                    {animals.map((animal) => (
                        <Col md={4} key={animal._id} className="mb-4">
                            <AnimalCard animal={animal} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Animals;