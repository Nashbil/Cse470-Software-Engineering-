import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Signup() {
  return (
    <div className="container my-5">
      <h2 className="text-center">Signup Page</h2>
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Create a password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className="container my-5">
      <h2 className="text-center">Login Page</h2>
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product === selectedProduct ? null : product); // Toggle visibility
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#007bff" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NEXSUS.</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="project">Projects</a>
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
          backgroundColor: "#0056b3",
        }}
      >
        <div>
          <h1>Welcome to Computer Vision Projects</h1>
          <p>Explore innovative solutions powered by AI and computer vision technology</p>
          <div className="d-flex justify-content-center">
            <Link to="/signup" className="btn btn-light me-2">Signup</Link>
            <Link to="/login" className="btn btn-outline-light">Login</Link>
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

      {/* Profile Section */}
      <section id="Profile" className="bg-dark text-white py-4">
        <div className="container text-center">
          <h3 className="mb-3" style={{ color: "#007bff" }}>Contact Information</h3>
          <p>Email: visinexsus42@gmail.com</p>
          <p>Phone: 01521507248</p>
          <p>Address: BRAC UNIVERSITY NEW CAMPUS</p>
        </div>
      </section>
    

      {/* Routes */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
