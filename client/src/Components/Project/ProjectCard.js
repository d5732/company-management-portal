import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userState } from '../../globalstate'
import { useRecoilState } from 'recoil'
import api from '../../Services/api'
import CreateProject from './Modals/CreateProject'
import EditProject from './Modals/EditProject'
import './Project.css'

const ProjectCard = ({ handleUser }) => {
  const [user, setUser] = useRecoilState(userState)
  const [teamsData, setTeamsData] = useState(null)
  const [projectId, setProjectId] = useState(null)
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  useEffect(() => {
    api.get(`/company/${handleUser()}/projects`).then((resp) => {
      setTeamsData(resp.data)
    })
  }, [])

  return (
    <div className='project-container'>
      {addModal && (
        <CreateProject teamsData={teamsData} setAddModal={setAddModal} />
      )}
      {user.isAdmin && (
        <button className='project-add-btn' onClick={() => setAddModal(true)}>
          New
        </button>
      )}
      {teamsData &&
        teamsData.map((team, index) => {
          return (
            <>
              <div key={index}>
                <div>
                  {team.projects &&
                    team.projects
                      .sort((a, b) => b.id - a.id)
                      .map((project, i) => (
                        <div className='project-wrapper' key={i}>
                          <div>
                            <Link
                              to='/project'
                              state={{
                                name: project.name,
                                description: project.description,
                              }}
                            >
                              <button className='view-project-btn'>
                                View Project
                              </button>
                            </Link>
                          </div>
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
                          {user.isAdmin && (
                            <button
                              className='project-edit-btn'
                              onClick={() => {
                                setEditModal(true)
                                setProjectId(project.id)
                              }}
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      ))}
                </div>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default ProjectCard
