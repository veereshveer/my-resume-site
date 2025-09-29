import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="my-5">
      <h2 className="section-title h5 mb-3">Experience Summary</h2>
      <div className="mb-3">
        <h6 className="mb-1">Tarento Technology — Software Developer</h6>
        <small className="text-muted">Jun 2021 — Present | Bangalore</small>
        <ul className="mt-2">
          <li>Worked on CimplyFive (client: ClearTax) — automation solution for compliance risk management (Angular + Java + Spring MVC, MongoDB).</li>
          <li>Implemented APIs, owned multiple product modules, integrated multiple vendors.</li>
          <li>Worked on product features such as Riskcovery redirection URL (ASC encryption), user details retrieval and storage.</li>
        </ul>
      </div>
      <div className="mb-3">
        <h6 className="mb-1">OLA — Insurance (Module Developer)</h6>
        <small className="text-muted">(part of 1.4 years experience)</small>
        <ul className="mt-2">
          <li>Developed Spring Boot APIs, integrated with MySQL and Hibernate for insurance modules: Mobile screen protection, MSTU, Home Device Protect, Doctor On Call, OPD Insurance, Driver Health Protect, Emergency Health Cover, Flight Insurance, Pocket Security.</li>
          <li>Ownership of APIs and vendor integrations for multiple insurance products.</li>
        </ul>
      </div>
      <div className="mb-3">
        <h6 className="mb-1">Parinitha Music Service Pvt Ltd. (Jookebox) — Software Developer</h6>
        <small className="text-muted">June 2019 — Oct 2020</small>
        <ul className="mt-2">
          <li>Worked on Jookebox web application for controlling music devices, playlists, subscriptions and device management (PHP, Bootstrap, MySQL).</li>
        </ul>
      </div>
      <div className="mb-3">
        <h6 className="mb-1">Internships</h6>
        <small className="text-muted">Entomo (EPMS) — 3 months; Jookebox — 4 months</small>
        <p className="mt-2 mb-0">Gained exposure to full-stack development, backend APIs and product workflows.</p>
      </div>
    </section>
  )
}
