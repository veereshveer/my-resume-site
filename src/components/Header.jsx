import React from 'react'

export default function Header() {
  return (
    <header className="bg-primary text-white py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
        <img src="/profile.jpg" alt="Veeresh R" className="rounded-circle header-photo border border-3 border-white shadow" />
        <div className="flex-grow-1">
          <h1 className="h3 mb-1 fw-bold">Veeresh R</h1>
          <p className="mb-1">Software Developer — Java | Spring Boot | React</p>
          <p className="mb-2 small">
            <span className="me-3">📧 <a className="text-white" href="mailto:veereshr87@gmail.com">veereshr87@gmail.com</a></span>
            <span className="me-3">📱 +91 8867797481</span>
            <span>🔗 <a className="text-white" href="https://linkedin.com/in/veeresh-r-b59b68151" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </p>
          <div className="d-flex gap-2">
            <a href="/resume.pdf" className="btn btn-light btn-sm" target="_blank" rel="noopener noreferrer">📄 Download Resume</a>
            <a href="#contact" className="btn btn-outline-light btn-sm">✉️ Contact</a>
          </div>
        </div>
      </div>
    </header>
  )
}
