import {axiosInstance} from "../utils/API/API";

export const getCharacters = async () => {
  const response = await axiosInstance.get('/api/v2/Characters')
  return response.data
}