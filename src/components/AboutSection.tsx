import React from 'react';
import aboutImage from '../assets/Main.png';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-light position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="about-img-container mb-4 mb-md-0">
              <img
                src={aboutImage}
                alt="About Us"
                className="img-fluid about-img"
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <h2>About Our Business</h2>
            <p>
              At HVAC Services, we pride ourselves on delivering reliable,
              efficient, and high‑quality HVAC solutions for both residential and
              commercial clients. With over 20 years of experience, our team of
              licensed professionals ensures that your indoor environment is
              comfortable, safe, and energy‑efficient.
            </p>
            <p>
              We are committed to excellence and innovation, offering tailored
              solutions to meet your unique needs. Our passion for quality and
              customer satisfaction drives us to create lasting, positive impacts
              in every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
