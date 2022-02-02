import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { UserState } from '../../store/reducers/user.reducer';
import { usersSelector } from '../../store/selectors/user.selector';
import { User } from '../user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {
  users$: Observable<User[]> = this.store.select(usersSelector)
  constructor(private store: Store<UserState>) { }

  ngAfterViewInit(): void {
   this.store.select(usersSelector).pipe(tap(console.log)).subscribe()
  }

}
