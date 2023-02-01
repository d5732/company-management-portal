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
    <div className='project-container'>
      {addModal && (
        <CreateProject teamsData={teamsData} setAddModal={setAddModal} />
      )}
      <button className='project-add-btn' onClick={() => setAddModal(true)}>
        New
      </button>
      {teamsData &&
        teamsData.map((team, index) => {
          return (
            <div key={index}>
              <div>
                {console.log(team.projects)}
                {team.projects &&
                  team.projects.map((project, i) => (
                    <div className='project-wrapper' key={i}>
                      <h2 className='projectName'>{project.name}</h2>
                      <p className='projectDescription'>
                        {project.description}
                      </p>
                      {editModal && (
                        <EditProject
                          teamId={team.id}
                          companyId={companyId}
                          projectId={projectId}
                          setEditModal={setEditModal}
                        />
                      )}
                      <button
                        className='project-edit-btn'
                        onClick={() => {
                          setEditModal(true)
                          setProjectId(project.id)
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ProjectCard
