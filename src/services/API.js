import axios from "axios";

export const getData = async(vehicle) => {
  const path = `https://api.spacexdata.com/v3/`;
  const response = await axios.get(path + vehicle)
  const result = JSON.stringify(response.data)
  return JSON.parse(result)

}