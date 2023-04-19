import { Component, Input, SimpleChange } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';
import { UserRepository } from 'src/app/models/user-repository';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  @Input() userDetails!: UserDetails;
  @Input() userRepositories!: UserRepository[];

  ngOnChanges (changes:  SimpleChange) {
  }
}
