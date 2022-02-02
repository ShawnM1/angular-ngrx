import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentUser } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/reducers/user.reducer';
import { userSelector } from 'src/app/store/selectors/user.selector';
import { User } from '../user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User> 

  constructor(private route: ActivatedRoute, private store: Store<UserState>) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('testing')
      this.store.dispatch(getCurrentUser(+params['id']))
      this.user$ = this.store.select(userSelector)
    })
  }

}
