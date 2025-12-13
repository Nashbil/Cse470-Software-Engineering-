import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function About() {
  const teamMembers = [
    {
      name: "MD RANA MUSTAFA",
      position: "Founder & CEO VisiNexsus",
      
      image: "https://i.ibb.co/n1zk5Nr/your-image3.jpg", 
    },
    {
      name: "SADAT MAHMUD",
      position: "Founder & President VisiNexsus",
      image: "https://i.ibb.co/xJbybRf/your-image3.jpg", 
    },
    {
      name: "ATOSHI SAMADDER",
      position: "General Partner at VisiNexsus, Board Member",
      image: "https://i.ibb.co/LCrXzB0/your-image3.jpg", 
    },
    {
      name: "Nabil Nashit",
      position: " VisiNexsus, Board Member",
      image: "https://i.ibb.co/2d9nTt7/your-image3.jpg", 
    },
  ];

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

    <div className="about-section">
      <header className="text-center my-5">
        <h1>About Us</h1>
        <p>
          Our mission is to enable every company to harness the power of Computer Vision.
        </p>
      </header>

      <section className="team container my-5">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>  </div> 
  );
}

export default About;
