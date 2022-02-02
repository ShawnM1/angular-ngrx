import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, switchMap } from "rxjs";
import { UserService } from "src/app/users/user.service";
import { getCurrentUser, getCurrentUserSuccess, getUsers, getUsersSuccess } from "../actions/user.action";

@Injectable()
export class UserEffects {
    constructor(private action$: Actions, private userService: UserService) {}

    loadUsers$ = createEffect(() => 
        this.action$.pipe(
            ofType(getUsers),
            exhaustMap(() => this.userService.getUsers().pipe(
                map((users) =>{ 
                    console.log('effect' + users)
                    return getUsersSuccess(users)}
                )
            )
        ))
    )

    loadCurrentUser$ = createEffect(() => 
        this.action$.pipe(
            ofType(getCurrentUser),
            switchMap((action) => this.userService.getUserById(action.id).pipe(
                map((user) => getCurrentUserSuccess(user))
            ))
        )
    )
}