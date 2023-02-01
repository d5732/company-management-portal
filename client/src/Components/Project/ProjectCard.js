import React, { useState, useEffect } from 'react'
import api from '../../Services/api'
import CreateProject from './Modals/CreateProject'
import "./Project.css"

const ProjectCard = () => {
  const [projectsData, setProjectsData] = useState(null)
  const [modal, setModal] = useState(false)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  useEffect(() => {
    api.get(`/company/${companyId}/projects`).then((resp) => {
      setProjectsData(resp.data)
    })
  }, [])

  console.log(projectsData)

  const renderProjects = projectsData && projectsData.map((project) => {
    return (
      <div key={project.id} className="project-wrapper">
          <h3>{project.name}</h3>
          <p>{project.desciption}</p>
        <hr className="project-line" />
      </div>
    )
  })

  return (
    <>
      <div className="project-card-container">
        {modal && <CreateProject companyId={companyId} setModal={setModal} />}
        {renderProjects}
        <button className="project-add-btn" onClick={() => setModal(true)}>
            <p>New</p>
        </button>
      </div>
    </>
  )
}

export default ProjectCard
