import { createAction } from "@ngrx/store";
import { User } from "src/app/users/user.interface";

export const getUsers = createAction('[User] Get Users')
export const getUsersSuccess = createAction('[User] Get Users Success', (users: User[]) => ({ users }));

export const getCurrentUser = createAction('[User] Get Current User', (id: number) => ({ id }))
export const getCurrentUserSuccess = createAction('[User] Get Current User', (currentUser: User) => ({ currentUser }))