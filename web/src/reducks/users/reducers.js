import * as Actions from './actions'
import initialState from '../store/initialState'
import { CardActions } from '@material-ui/core'

export const UsersReducer = (state = initialState.users,action) => {
  switch (action.type){
    case Actions.LOG_IN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}