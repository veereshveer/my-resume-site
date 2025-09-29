import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="container text-center mt-4">
      <a 
        href="/VeereshRResume.pdf" 
        className="btn btn-primary btn-lg" 
        download
      >
        📄 Download Resume (PDF)
      </a>
    </div>
  );
}

export default App;

