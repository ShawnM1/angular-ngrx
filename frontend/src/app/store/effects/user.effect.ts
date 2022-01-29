import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { UserService } from "src/app/user/user.service";
import { getUsers, getUsersSuccess } from "../actions/user.action";

@Injectable()
export class UserEffects {
    constructor(private action$: Actions, private userService: UserService) {}

    loadUsers$ = createEffect(() => 
        this.action$.pipe(
            ofType(getUsers),
            exhaustMap(() => this.userService.getUsers().pipe(
                map((users) => getUsersSuccess(users)
                )
            )
        ))
    )
}