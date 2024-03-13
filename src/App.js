// App.js
import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my portfolio! I'm a passionate developer...</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1...</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2...</p>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
  }


