import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

function App() {
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  
  const handleProductClick = (product) => {
    setSelectedProduct(product === selectedProduct ? null : product); 
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#007bff" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NEXSUS.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Profile">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('your-hero-image.jpg') no-repeat center center/cover",
          height: "70vh",
          backgroundColor: "#FF0000",
        }}
      >
        <div>
          <h1>Welcome to Computer Vision Projects</h1>
          <p>Explore innovative solutions powered by AI and computer vision technology</p>
          <div className="d-flex justify-content-center">
            <a href="/Project" className="btn btn-light me-2">Projects</a> 
            <a href="/about" className="btn btn-outline-light">About Us</a> 
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "#007bff" }}>Projects</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.ibb.co/k583FQs/your-image3.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1: Object Detection</h5>
                <p className="card-text">Real-time object detection using deep learning models.</p>
                <a
                  href={`${process.env.PUBLIC_URL}/downloads/object-detection.pdf`}
                  download="ObjectDetection.pdf"
                  className="btn"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.ibb.co/9Tjtt0M/your-image3.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2: Face Recognition</h5>
                <p className="card-text">Secure authentication system using face recognition.</p>
                <a
                  href={`${process.env.PUBLIC_URL}/downloads/face-recognition.pdf`}
                  download="FaceRecognition.pdf"
                  className="btn"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.ibb.co/kGTWpr0/your-image3.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project 3: Eye Detector</h5>
                <p className="card-text">Monitoring your eye movement on your screen.</p>
                <a
                  href={`${process.env.PUBLIC_URL}/downloads/eye-detector.pdf`}
                  download="EyeDetector.pdf"
                  className="btn"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4" style={{ color: "#007bff" }}>What Our Users Say</h2>
          <blockquote className="blockquote">
            <p>"This product has transformed the way I work. Highly recommended!"</p>
            <footer className="blockquote-footer">Jane Doe</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>"A must-have tool for anyone looking to boost their productivity."</p>
            <footer className="blockquote-footer">John Smith</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>"The intuitive design and functionality are simply amazing."</p>
            <footer className="blockquote-footer">Sarah Johnson</footer>
          </blockquote>
        </div>
      </section>

      {/* Profile Section */}
      <section id="Profile" className="bg-dark text-white py-4">
        <div className="container text-center">
          <h3 className="mb-3" style={{ color: "#007bff" }}>Contact Information</h3>
          <p>Email: visinexsus42@gmail.com</p>
          <p>Phone: 01521507248</p>
          <p>Address: BRAC UNIVERSITY NEW CAMPUS</p>
        </div>
      </section>
    </div>
  );
}

export default App;
