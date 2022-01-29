import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/user/user.interface";
import { getUsersSuccess } from "../actions/user.action";

export interface UserState {
    users: User[];
    currentUser: User | undefined;
}

const initialState: UserState = {
    users: [],
    currentUser: undefined
}

export const userReducer = createReducer(
    initialState,
    on(getUsersSuccess, (state, { users }) => {
        return { ...state, users}
    })
)
