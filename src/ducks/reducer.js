import axios from 'axios'


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
                ...state, id: payload, user: payload, profile_pic: payload} 
        default:
            return {
                ...state
            }

                
        
    }
}