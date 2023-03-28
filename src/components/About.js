import React from "react";

function About() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img src="/images/avatar.jpg" alt="Your Name" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            I am a fast learning, diligent, attentive Software Engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
