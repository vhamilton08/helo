import axios from 'axios'
import Switch from '../routes'

const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}
const LOGIN_USER = 'LOGIN_USER'

export function loginUser(id, username, profile_pic) {
    return {
        type: 'LOGIN_USER',
        payload: {
            id,
            username,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action) {
   const {type, payload} = action
    switch (type) {
        case LOGIN_USER:
            return {
                ...state, username: payload.username, id: payload.id, profile_pic: payload.profile_pic
            }

                
        
    }
}