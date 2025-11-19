import { useState } from "react";
import axiosClient from "../api/axiosClient";
import Footer from '../components/Footer';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosClient.post("/auth/login", formData);
        localStorage.setItem("token", "res.data.token");
        alert("Login successful!");
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container py-5" style={{ maxWidth: "500px" }}>
                <h2 className="mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-2" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
                    <button className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        <Footer />
    </div>
    );
}

export default Login;