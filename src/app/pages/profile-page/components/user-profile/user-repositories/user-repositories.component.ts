import { Component, Input } from '@angular/core';
import { UserRepository } from 'src/app/models/user-repository';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss']
})
export class UserRepositoriesComponent {
  @Input() userRepositories!: UserRepository[];
}
