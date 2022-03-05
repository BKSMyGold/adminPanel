import Axios from 'axios'
import { ROLE_PERMISSION_BASE_URL } from '../Constants'

export const loginUser = (credentials) =>
  Axios.post(
    `${ROLE_PERMISSION_BASE_URL}/api/system-user/auth/login`,
    credentials
  )
