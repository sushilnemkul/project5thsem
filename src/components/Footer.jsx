import React from 'react';
import './Footer.css' // Create this file for styling

const Footer = () => {
  const sections = [
    { title: 'Section', links: ['Home', 'Features', 'Pricing', 'FAQs', 'About'] },
    { title: 'Section', links: ['Home', 'Features', 'Pricing', 'FAQs', 'About'] },
    { title: 'Section', links: ['Home', 'Features', 'Pricing', 'FAQs', 'About'] }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h3 className="section-title">{section.title}</h3>
            <ul className="section-links">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="copyright">
        <p>© 2021 B</p>
      </div>
    </footer>
  );
};

export default Footer;