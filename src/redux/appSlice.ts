import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LogInData, Message, pb, SendMessage, User } from '../pocketbase'
import { act } from 'react-dom/test-utils'

// Define a type for the slice state
interface AppState {
  isLoggedIn: boolean,
  user: User | null,
  usersList: User[] | null,
  messages: Message[] | null,
  selectedUser: string,
  selectedMessages: Message[]
}

// Define the initial state using that type
const initialState: AppState = {
    isLoggedIn: pb.authStore.isValid,
    user: null,
    usersList: null,
    messages: null,
    selectedUser: '',
    selectedMessages: []
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<LogInData>) => {
      state.isLoggedIn = true,
      state.user = action.payload.user
      state.usersList = action.payload.usersList
      state.messages = action.payload.messages
    },
    logOut: state => {
        state.isLoggedIn = false,
        state.user = null
    },
    selectUser: (state, action: PayloadAction<string>) => {
        const select = action.payload;
        state.selectedUser = select;
        
        if (state.messages){
            state.selectedMessages = state.messages.filter((m) => m.sender === select || m.receiver === select)
        }
    },
    addMessages: (state, action: PayloadAction<Message[]>) => {
        if (state.messages){
            state.messages.push.apply(action.payload)
        }
    }
  }
})

export const { logIn, logOut, selectUser, addMessages } = appSlice.actions

export default appSlice.reducer