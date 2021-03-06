import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserComponent } from "./users/user/user.component";

const routes: Routes = [
    { path: 'users', component: UserListComponent}, 
    { path: 'users/:id', component: UserComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}