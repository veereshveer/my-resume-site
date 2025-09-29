import React from 'react'

export default function Skills() {
  const skills = [
    'Java', 'Spring MVC', 'Spring Boot', 'Hibernate',
    'MySQL', 'MongoDB', 'Angular (basic)', 'React (basic)',
    'Git', 'Jira', 'Jenkins'
  ]

  return (
    <section id="skills" className="my-5">
      <h2 className="section-title h5 mb-3">Technical Skills / Tools</h2>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="card card-light p-3">
            <h6 className="mb-3">Programming & Databases</h6>
            <div className="d-flex flex-wrap gap-2">
              {skills.slice(0,6).map(s => <span key={s} className="badge bg-primary bg-opacity-10 text-primary">{s}</span>)}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card card-light p-3">
            <h6 className="mb-3">Dev Tools & Platforms</h6>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary bg-opacity-10 text-primary">Git</span>
              <span className="badge bg-primary bg-opacity-10 text-primary">Jira</span>
              <span className="badge bg-primary bg-opacity-10 text-primary">Jenkins</span>
              <span className="badge bg-primary bg-opacity-10 text-primary">IntelliJ</span>
              <span className="badge bg-primary bg-opacity-10 text-primary">Eclipse</span>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mt-3">Professional Skills</h6>
      <ul>
        <li>Strong analytical & logical thinking</li>
        <li>Fast learner with commitment to deliver</li>
      </ul>
    </section>
  )
}
