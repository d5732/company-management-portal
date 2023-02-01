import api from './api'

export const getAnnouncements = async (companyId) => {
  const response = await api.get(`/company/${companyId}/announcements`)
  return response.data
}
