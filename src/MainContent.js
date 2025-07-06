import React from 'react';
import './MainContent.css';
import aboutContent from './aboutContent';
import resumeContent from './resumeContent';
import portfolioContent from './portfolioContent';
import servicesContent from './servicesContent';
import contactContent from './contactContent';

function MainContent({ section }) {
  const mainContentStyle = {
    background: `url('/bg_image.jpg') center center/cover no-repeat fixed`,
  };

  if (section === 'Home') {
    return (
      <main className="main-content home-bg" style={mainContentStyle}>
        <div className="home-overlay">
          <h1>Rayen Ben Brahim</h1>
          <h2>Designeur image</h2>
        </div>
      </main>
    );
  } else if (section === 'About') {
    return (
      <main className="main-content" style={mainContentStyle}>
        <div className="section-content">
          <h1>{aboutContent.title}</h1>
          <p>{aboutContent.text}</p>
        </div>
      </main>
    );
  } else if (section === 'Resume') {
    return (
      <main className="main-content" style={mainContentStyle}>
        <div className="section-content">
          <h1>Resume</h1>
          {resumeContent.resumeEmbed && (
            <a
              href={resumeContent.resumeEmbed.replace('/preview', '/view')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: '#2d333b',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                marginTop: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              View Resume
            </a>
          )}
        </div>
      </main>
    );
  } else if (section === 'Portfolio') {
    return (
      <main className="main-content" style={mainContentStyle}>
        <div className="section-content">
          <h1>Portfolio</h1>
          {portfolioContent.map((section, sIdx) => (
            <div key={sIdx} style={{ marginBottom: '32px' }}>
              <h2>{section.section}</h2>
              <div className="portfolio-container">
                {section.items.map((item, idx) => (
                  <div key={idx} className="portfolio-item">
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt="" style={{ width: '200px', borderRadius: '8px' }} />
                    )}
                    {item.videoUrl && (
                      section.section === 'Videos' && idx === section.items.length - 1 ? (
                        // Special case for the last video in Videos section - use ScreenPal iframe
                        <div className="screenpal-video" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                          <div className="sp-embed-player" data-id="cTi1Qonl0QC">
                            <iframe 
                              width="100%" 
                              height="400" 
                              style={{ border: 'none' }} 
                              scrolling="no" 
                              src="https://go.screenpal.com/player/cTi1Qonl0QC?width=100%&height=400&ff=1&title=0" 
                              allowFullScreen={true}
                              title={item.title || 'Portfolio Video'}
                            ></iframe>
                          </div>
                        </div>
                      ) : (
                        // Standard video player for all other videos
                        <video controls style={{ width: '200px', borderRadius: '8px' }}>
                          <source src={item.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  } else if (section === 'Services') {
    return (
      <main className="main-content" style={mainContentStyle}>
        <div className="section-content">
          <h1>Services</h1>
          <ul>
            {servicesContent.map((service, idx) => (
              <li key={idx}><strong>{service.name}:</strong> {service.description}</li>
            ))}
          </ul>
        </div>
      </main>
    );
  } else if (section === 'Contact') {
    return (
      <main className="main-content" style={mainContentStyle}>
        <div className="section-content">
          <h1>Contact</h1>
          <p>Email: {contactContent.email}</p>
          <p>Phone: {contactContent.phone}</p>
          <p>Location: {contactContent.location}</p>
        </div>
      </main>
    );
  }
}

export default MainContent; 