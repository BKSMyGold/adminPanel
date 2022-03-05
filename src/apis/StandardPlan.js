import Axios from 'axios'
import { BASE_URL } from '../Constants'

export const addStandardPlan = (StandardPlan) =>
  Axios.post(`${BASE_URL}/api/plan/type/standard/`, {
    ...StandardPlan,
  })

export const deleteStandardPlan = (StandardPlanID) =>
  Axios.delete(`${BASE_URL}/api/plan/type/standard/${StandardPlanID}`)

export const updateStandardPlan = (StandardPlan) =>
  Axios.put(
    `${BASE_URL}/api/plan/type/standard/${StandardPlan.id}`,
    StandardPlan
  )
