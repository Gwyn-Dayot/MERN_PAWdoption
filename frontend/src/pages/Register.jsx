import { useState } from "react";
import axiosClient from "../api/axiosClient";
import Footer from '../components/Footer';
import { Container, Form, Button, Alert } from "react-bootstrap";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosClient.post("/auth/register", formData);
        alert("Registration successful! Please log in.");
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container py-5" style={{ maxWidth: "500px" }}>
                <h2 className="mb-4 text-center">Register</h2>
                <Form onSubmit={handleSubmit}>
                    <input className="form-control mb-2" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
                    <input className="form-control mb-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
                    <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
                    <button className="btn btn-primary w-100">Register</button>
                </Form>
            </div>
        <Footer />
    </div>
    );
}

export default Register;