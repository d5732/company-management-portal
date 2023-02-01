import React, { useState, useEffect } from 'react'
import api from '../../Services/api'
import CreateProject from './Modals/CreateProject'
import EditProject from './Modals/EditProject'
import './Project.css'

const ProjectCard = () => {
  const [teamsData, setTeamsData] = useState(null)
  const [projectsData, setProjectsData] = useState([])
  const [modal, setModal] = useState(false)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  // const teams = teamsData?.map((team) => team)

  useEffect(() => {
    api.get(`/company/${companyId}/projects`).then((resp) => {
      console.log(resp.data)
      setTeamsData(resp.data)
    })
  }, [])

  return (
    <div>
      {modal && <CreateProject teamsData={teamsData} setModal={setModal} />}
      <button className="project-add-btn" onClick={() => setModal(true)}>
        <p>New</p>
      </button>
      {teamsData &&
        teamsData.map((team, index) => (
          <div key={index}>
            <div>
              {team.projects &&
                team.projects.map((project, i) => (
                  <div key={i}>
                    <h4 className="projectName">{project.name}</h4>
                    <p className="projectDescription">{project.description}</p>
                    <EditProject />
                    <hr className="project-line" />
                  </div>
                ))}
            </div>
          </div>
        ))}
        <button onClick={() => console.log(teamsData)}></button>
    </div>
  )
}

export default ProjectCard
