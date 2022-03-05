import Axios from 'axios'
import { ROLE_PERMISSION_BASE_URL } from '../Constants'

export const getAllSliders = () =>
  Axios.get(`${ROLE_PERMISSION_BASE_URL}/api/sliders`)

export const addSlider = (slider, token) => {
  let formData = new FormData()
  let { name, image, offerId } = slider
  formData.append('image', image)
  formData.append('name', name)
  formData.append('offerId', offerId)
  return Axios.post(`${ROLE_PERMISSION_BASE_URL}/api/slider/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
}

export const deleteSlider = (sliderID) =>
  Axios.delete(`${ROLE_PERMISSION_BASE_URL}/api/slider/${sliderID}`)

export const updateSlider = (slider) =>
  Axios.put(`${ROLE_PERMISSION_BASE_URL}/api/slider/${slider.id}`, slider)
