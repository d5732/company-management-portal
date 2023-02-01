import api from "./api";

export const getTeams = async (companyId) => {
    const response = await api.get(`/company/${companyId}/teams`)
    return response.data;
}
