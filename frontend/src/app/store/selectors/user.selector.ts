import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "src/app/users/user.interface";
import { UserState } from "../reducers/user.reducer";


export const usersSelector = createSelector(
    (state: UserState) => state.users,
    (users: User[]) => users
)

export const userSelector = createSelector(
    (state: UserState) => state.currentUser,
    (user: User) => user
)