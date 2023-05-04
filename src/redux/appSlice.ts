import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadData, Message, pb, User } from '../pocketbase'
import { RootState } from './store'

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
    logIn: state => {
      state.isLoggedIn = true
    },
    loadData: (state, action: PayloadAction<LoadData>) => {
      state.user = action.payload.userData
      state.usersList = action.payload.usersListData
      state.messages = action.payload.messagesData
    },
    logOut: state => {
        state.isLoggedIn = false,
        state.user = null
        state.usersList = null
        state.messages = null
        state.selectedUser = ''
        state.selectedMessages = []
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

export const { logIn, loadData, logOut, selectUser, addMessages } = appSlice.actions

export const loggedInSelector = (state: RootState) => state.app.isLoggedIn;
export const userSelector = (state: RootState) => state.app.user;
export const usersListSelector = (state: RootState) => state.app.usersList;
export const messagesSelector = (state: RootState) => state.app.messages;
export const selectedUserSelector = (state: RootState) => state.app.selectedUser;
export const selectedMessagesSelector = (state: RootState) => state.app.selectedMessages;

export default appSlice.reducer