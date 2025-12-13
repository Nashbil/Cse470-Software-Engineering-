import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Project() {
  const projects = [
    {
      title: "Object Detection",
      description: "Real-time object detection using deep learning models.",
      image: "https://i.ibb.co/k583FQs/your-image3.jpg", 
      link: "#",
    },
    {
      title: "Face Recognition",
      description: "Secure authentication system using face recognition technology.",
      image: "https://i.ibb.co/9Tjtt0M/your-image3.jpg",
      link: "#",
    },
    {
      title: "Eye Detection",
      description: "Classifying objects in images using convolutional neural networks (CNNs).",
      image: "https://i.ibb.co/kGTWpr0/your-image3.jpg", 
      link: "#",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#007bff" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Computer Vision</a>
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
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "#007bff" }}>Our Featured Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#007bff" }}>{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn" style={{ backgroundColor: "#007bff", color: "white" }}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; VisiNexus – Connecting insights through vision</p>
      </footer>
    </div>
  );
}

export default Project;
