import React from 'react'

export default function Education() {
  return (
    <section id="education" className="my-5">
      <h2 className="section-title h5 mb-3">Education</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card card-light p-3">
            <h6 className="mb-1">Master of Computer Application</h6>
            <small className="text-muted">Dr. Ambedkar Institute of Technology, Bengaluru — 2019</small>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-light p-3">
            <h6 className="mb-1">Bachelor of Computer Application</h6>
            <small className="text-muted">Vidyavahini First Grade College, Tumkur — 2017</small>
          </div>
        </div>
      </div>
    </section>
  )
}
