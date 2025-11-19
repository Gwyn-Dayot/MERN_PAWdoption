import Footer from "../components/Footer";

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container py-5text-center">
                <h1 className="mb-4">Welcome to PAWdoption</h1>
                <p className="lead mb-4">
                    Your trusted platform for finding loving homes for pets in need. Explore our wide range of adorable animals waiting for adoption and make a difference today!
                </p>
                <img src="/assets/PAWdoption.png" alt="PAWdoption logo" className="img-fluid rounded" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;