import React, { useState, useEffect } from 'react'
import api from '../../Services/api'
import CreateProject from './Modals/CreateProject'
import EditProject from './Modals/EditProject'
import './Project.css'

const ProjectCard = () => {
  const [teamsData, setTeamsData] = useState(null)
  const [projectId, setProjectId] = useState(null)
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  useEffect(() => {
    api.get(`/company/${companyId}/projects`).then((resp) => {
      console.log(resp.data)
      setTeamsData(resp.data)
    })
  }, [])

  return (
    <div>
      {addModal && <CreateProject teamsData={teamsData} setAddModal={setAddModal} />}
      <button className="project-add-btn" onClick={() => setAddModal(true)}>
        <p>New</p>
      </button>
      {teamsData &&
        teamsData.map((team, index) => {
           return (
          <div key={index}>
            <div>
              {console.log(team.projects)}
              {team.projects && 
                team.projects.map((project, i) => (
                  <div key={i}>
                    <h4 className="projectName">{project.name}</h4>
                    <p className="projectDescription">{project.description}</p>
                    <div>
                      {editModal && <EditProject
                        teamId={team.id}
                        companyId={companyId}
                        projectId={projectId}
                        setEditModal={setEditModal}
                      />}
                      <button
                        className="project-add-btn"
                        onClick={() => {
                          setEditModal(true)
                          setProjectId(project.id)
                        }}
                      >
                        <p>Edit</p>
                      </button>
                    </div>
                    <hr className="project-line" />
                  </div>
                ))}
            </div>
          </div>
        )})}
      <button onClick={() => console.log(teamsData)}></button>
    </div>
  )
}

export default ProjectCard
