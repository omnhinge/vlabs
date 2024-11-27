import React from 'react';
import parth from './images/parth.jpg';
import saurabh from './images/saurabh.jpg';
import om from './images/om.jpg';
import nishi from './images/nishi.jpg';
import paras from './images/paras.jpg';
import ojas from './images/ojas.jpg';
import './About.css'; 
import Header from './header';
import Footer from './footer';

const people = [
  {
    name: 'Om Hinge',
    image: om,
    linkedin: 'https://www.linkedin.com/in/omhinge',
    email: 'hingeon@rknec.edu'
  },
  {
    name: 'Ojas Dahikar',
    image: ojas,
    linkedin: 'https://www.linkedin.com/in/ojasdahikar',
    email: 'dahikaroo@rknec.edu'
  },
  {
    name: 'Saurabh Thakare',
    image: saurabh,
    linkedin: '',
    email: 'thakaresd_1@rknec.edu'
  },
  {
    name: 'Nishi Singh',
    image: nishi,
    linkedin: 'https://www.linkedin.com/in/nishi-singh-565584291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'singhn_4@rknec.edu'
  },
  {
    name: 'Parth Diwale',
    image: parth,
    linkedin: 'https://www.linkedin.com/in/parth-diwale-14b078323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'diwalepp@rknec.edu'
  },
  {
    name: 'Paras Potnurwar',
    image: paras,
    linkedin: 'https://www.linkedin.com/in/paras-potnurwar-51209a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'potnurwarpm@rknec.edu'
  }
];

function PeopleTable() {
  return (
    <div>
      <Header />
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        Welcome to our team! We are a group of passionate and dedicated professionals, driven to provide high-quality 
        technical support, expert webpage building, and in-depth analysis and design of algorithms. We work closely with 
        our clients to understand their needs and deliver innovative solutions tailored to their specific requirements.
      </p>
      <div className="team-members-container">
        <h2>Meet Our Team</h2>
        <div className="team-members-wrapper">
          {people.map((person, index) => (
            <div className="team-member" key={index}>
              <img src={person.image} alt={person.name} className="team-member-image" />
              <div className="team-member-body">
                <h3>{person.name}</h3>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
                <p className="email">Email: <a href={"mailto:" + person.email}>{person.email}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2>Our Services</h2>
      <p className="about-us-service-description">
        We offer a wide range of services, including:
      </p>
      <ul className="services-list">
        <li><strong>Technical Support:</strong> Our team provides timely and effective support for all technical issues, 
        ensuring smooth operations for your business. Whether it's troubleshooting, system maintenance, or optimization, we’re here to help.</li>
        <li><strong>Webpage Building:</strong> We specialize in creating responsive, visually appealing, and user-friendly websites. 
        Our team is skilled in front-end and back-end technologies and ensures your website is optimized for performance and SEO.</li>
        <li><strong>Algorithm Analysis and Design:</strong> We are experts in analyzing algorithms, optimizing them for 
        better performance, and designing new ones tailored to specific use cases. From sorting algorithms to complex graph traversal techniques, 
        we can help you find the best solution for your problem.</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p className="about-us-why-choose">
        Our team stands out because of our commitment to excellence, clear communication, and customer-centric approach. We take pride in delivering solutions 
        that not only meet but exceed your expectations. With a focus on continuous improvement and the latest industry trends, we ensure our solutions are 
        cutting-edge and highly effective.
      </p>
      <h2>Get in Touch</h2>
      <p className="about-us-contact">
        If you need assistance with technical support, website development, or algorithm analysis and design, feel free to contact us.
        We are excited to help you with your next project!
      </p>
      <Footer />
    </div>
  );
}

export default PeopleTable;
