import React from 'react'

export default function Projects() {
  const projects = [
    { title: 'CimplyFive', tech: 'Angular, Java, Spring MVC, MongoDB', desc: 'Automation solutions for compliance risk management — client: ClearTax.' },
    { title: 'OLA Finance System - Insurance', tech: 'Java, Spring Boot, Hibernate, MySQL', desc: 'Insurance modules (Mobile screen protection, MSTU, Home Device Protect, Doctor On Call, etc.).' },
    { title: 'Online Assessment Application', tech: 'Angular, Java, SpringBoot, MySQL (MariaDB)', desc: 'Online test platform with verification, time-limited links, reporting and instant email results.' },
    { title: 'Jookebox Web Application', tech: 'PHP, HTML, Bootstrap, MySQL', desc: 'Controller web app for music device management, playlists, scheduling and subscriptions.' }
  ]

  return (
    <section id="projects" className="my-5">
      <h2 className="section-title h5 mb-3">Projects</h2>
      <div className="row g-3">
        {projects.map(p => (
          <div className="col-md-6" key={p.title}>
            <div className="card card-light p-3 h-100">
              <h6 className="mb-1">{p.title}</h6>
              <small className="text-muted">{p.tech}</small>
              <p className="mb-0 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
