// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import myVideo from './background-video.mp4'
import myimage from './Components/watch1.avif'
import myimage2 from './Components/watch2.avif'
import myimage3 from './Components/watch3.avif'
import myimage4 from './Components/watch4.avif'



// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Watch Evolution</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/collection" className="nav-link">Collection</a>
          <a href="/history" className="nav-link">History</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
        
        <div className="nav-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (

    <div className='home-page'>
    <div className="home-container">
      <video autoPlay loop className="background-video">
       <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <Navbar />
      
      <div className="content-overlay">
        <div className="main-content">
          <h1>Evolve in Time</h1>
          <p>Discover the art of watchmaking through centuries of innovation and craftsmanship</p>
          <button className="explore-btn" onClick={() => window.location.href = '/collection'}>Explore the Collection</button>
        </div>
      </div>
     
    </div>

    <div className='one'><h3>KNOW MORE ABOUT WATCHES </h3></div>
    
    <div className='main-one'> 
      <div className='home-content-1'> <h2 className='header1'>Calatrava </h2> <br/> <p>The Calatrava collection includes timepieces set with diamonds. For example, the Ladies' Calatrava Ref. 4997/200G features a bezel lit up by 76 brilliant-cut internally flawless diamonds. The result is inimitable finesse on a classic timepiece.
</p></div>
       <div className='home-image-1'>  <img className='img-1' src={myimage}/>     </div>
    </div>

    <div className='main-one'> 
      <div className='home-image-1'>      <img className='img-1' src={myimage2}/>     </div>
       <div className='home-content-1'> <h2 className='header1'>History</h2> <br/> <p>In the 19th century, the invention of the wristwatch revolutionized personal timekeeping, especially during World War I, when soldiers needed hands-free convenience. The 20th century brought major changes with quartz watches (1960s), which offered accuracy and affordability, followed by the rise of digital watches in the 1970s. Today, watches combine tradition with technology, from luxury mechanical pieces to advanced smartwatches that connect to our digital lives.</p></div>
    </div>

    <div className='main-one'> 
      <div className='home-content-1'>  <h2 className='header1'> Golden Ellipse</h2> <br/> <p>This patented design, with slender link rows echoing classic chain bracelets, subtly marries elegance with comfort. Crafted entirely from fully polished rose gold and adorned with an engraved clasp, this incredibly supple bracelet honors the 1970s – an era when the Golden Ellipse watch played a pivotal role.</p></div>
       <div className='home-image-1'>  <img className='img-1' src={myimage3}/>   </div>
    </div>

       <div className='main-one'> 
         <div className='home-image-1'>  <img className='img-1' src={myimage4}/>   </div>
      <div className='home-content-1'>  <h2 className='header1'> Golden Ellipse</h2> <br/> <p>With its iconic design, the Nautilus has epitomized the elegant sports watch since its launch in 1976. Today, it boasts a splendid and incredibly rich collection of models, including a variety of complications such as perpetual calendar or flyback chronograph. Crafted in steel, rose gold or white gold, these timepieces accompany the most active lifestyles with unparalleled class and sophistication.</p></div>  
    </div>

    <div className='main-part'>
    <h2>Watches </h2><br/>
       <p>The history of watches is a fascinating journey that reflects human progress in both technology and design. In ancient times, people relied on sundials, water clocks, and hourglasses to measure time. By the 16th century, mechanical pocket watches became popular in Europe, serving as both timekeepers and symbols of status. The mid-20th century brought the quartz revolution, introducing highly accurate and affordable watches, followed by digital watches in the 1970s. Today, watches have evolved into a blend of tradition and innovation, ranging from luxury mechanical timepieces to advanced smartwatches that connect with our digital lives.</p>
    </div>

    </div>
   
  );
};

// Collection Component
const Collection = () => {
  const watches = [
    {
      id: 1,
      name: "Grand Complication",
      era: "1920s",
      description: "A masterpiece of horological art with perpetual calendar, moon phases, and chronograph",
      image: "https://www.luxurybazaar.com/grey-market/wp-content/uploads/2023/01/Patek-Philippe-Sky-Moon-Tourbillon.jpeg"
    },
    {
      id: 2,
      name: "Calatrava",
      era: "1930s",
      description: "The epitome of elegance and simplicity in watch design",
      image: "https://patek-res.cloudinary.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/268111-51884"
    },
    {
      id: 3,
      name: "Nautilus",
      era: "1970s",
      description: "The iconic sports watch that redefined luxury timepieces",
      image: "https://patek-res.cloudinary.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/175378-51883"
    },
    {
      id: 4,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    {
      id: 5,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/736x/83/24/f2/8324f27e4989970b878d1d73482187de.jpg"
    },
    {
      id: 6,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/736x/81/77/7a/81777a920eea89cfa66fbde2808a8813.jpg"
    },
    {
      id: 7,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/1200x/21/27/75/212775bb3f26e86003b61557dc06acda.jpg"
    },
    {
      id: 8,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/736x/48/bd/c8/48bdc87414c86bdbb412f00db40ec0ed.jpg"
    },
    {
      id: 9,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/736x/26/a2/2d/26a22d8189552540ad6b5f0fea640cc1.jpg"
    },
    {
      id: 10,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/1200x/a2/f1/c0/a2f1c07759940d0ee1afb18b4fed86c0.jpg"
    },
    {
      id: 11,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/736x/d7/e2/d0/d7e2d03d61c06b4b094f2b77968e5cdd.jpg"
    },
    {
      id: 12,
      name: "Aquanaut",
      era: "1990s",
      description: "A modern interpretation of the sports watch with tropical strap",
      image: "https://i.pinimg.com/736x/7c/70/04/7c70048e0404522129184d69672ff760.jpg"
    }

  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="section-header">
          <h1>Timeless Collection</h1>
          <p>Explore our exquisite timepieces through the ages</p>
        </div>
        
        <div className="watches-grid">
          {watches.map(watch => (
            <div key={watch.id} className="watch-card">
              <div className="watch-image">
                <img src={watch.image} alt={watch.name} />
                <div className="watch-era">{watch.era}</div>
              </div>
              <div className="watch-details">
                <h3>{watch.name}</h3>
                <p>{watch.description}</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// History Component
const History = () => {
  const timelineEvents = [
    {
      year: "1839",
      title: "The Beginning",
      description: "Antoine Norbert de Patek establishes Patek, Czapek & Cie in Geneva"
    },
    {
      year: "1845",
      title: "Partnership with Adrien Philippe",
      description: "Jean Adrien Philippe joins the company, bringing his keyless winding mechanism"
    },
    {
      year: "1851",
      title: "The Great Exhibition",
      description: "Queen Victoria purchases a Patek Philippe watch at the Great Exhibition in London"
    },
    {
      year: "1868",
      title: "First Swiss Wristwatch",
      description: "Patek Philippe creates the first Swiss wristwatch for Countess Koscowicz of Hungary"
    },
    {
      year: "1932",
      title: "The Stern Family",
      description: "The Stern family acquires the company, beginning a new era of innovation"
    },
    {
      year: "1989",
      title: "The Caliber 89",
      description: "Patek Philippe creates the most complicated portable timepiece with 33 complications"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="section-header">
          <h1>History of Excellence</h1>
          <p>Over 180 years of watchmaking heritage and innovation</p>
        </div>
        
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="section-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our watch experts</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h2>Visit Us</h2>
            <p>41 Rhone High Street</p>
            <p>Geneva, Switzerland</p>
            <p>+41 22 319 03 60</p>
            <p>info@watchevolution.com</p>
            
            <div className="opening-hours">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;