import Footer from '../components/Footer';

function AdminDashboard() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container py-5">
                <h2 className="mb-4 text-center">Admin Dashboard</h2>
                <p>Welcome to the Admin Dashboard.</p>
            </div>
            <Footer />
        </div>
    );
}

export default AdminDashboard;