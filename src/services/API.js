import axios from "axios";

export const getData = (vehicle) => {
  const path = `https://api.spacexdata.com/v3/`;
  return axios({
    method: 'GET',
    url: path + vehicle
  }).then(response => {
      const result = JSON.stringify(response.data)
      return JSON.parse(result)
    })
}