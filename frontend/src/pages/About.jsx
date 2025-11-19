import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-4">
      <h1 className="mb-3">About PAWdoption</h1>
      <p>
        PAWdoption is a pet adoption platform designed to help rescue centers,
        shelters, and pet lovers connect more easily. Our mission is simple:
        provide a safe and efficient way for animals to find their forever homes.
      </p>

      <h3 className="mt-4">Our Mission</h3>
      <p>
        We aim to make the adoption process smoother by offering an online space
        where users can browse available animals, learn about them, and start
        the journey of welcoming a new furry friend.
      </p>

      <h3 className="mt-4">Why We Built This</h3>
      <p>
        Many shelters struggle with visibility. PAWdoption helps solve that by
        showcasing animals in need while ensuring adopters get all the info they
        need to make the right choice.
      </p>

      <h3 className="mt-4">Features</h3>
      <ul>
        <li>Browse available animals for adoption</li>
        <li>User registration and login</li>
        <li>Admin dashboard for managing animal records</li>
        <li>Secure backend API with JWT authentication</li>
      </ul>
    </Container>
  );
}

export default About;