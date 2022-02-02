import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/users/user.interface";
import { getCurrentUserSuccess, getUsersSuccess } from "../actions/user.action";

export interface UserState {
    users: User[];
    currentUser: User;
}

const initialState: UserState = {
    users: [{username: 'test'} as User],
    currentUser: {} as User
}

export const userReducer = createReducer(
    initialState,
    on(getUsersSuccess, (state, { users }) => {
        console.log('updating users state')
        return { ...state, users }
    }),
    on(getCurrentUserSuccess, (state, { currentUser }) => ({...state, currentUser}))
)
