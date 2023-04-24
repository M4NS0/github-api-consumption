import { Component, Input } from '@angular/core';
import { UserRepository } from 'src/app/models/user-repository';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss']
})
export class UserRepositoriesComponent {
  @Input() userRepositories!: UserRepository[];

  getLastUpdate(repository: UserRepository): number {
    const lastUpdated = new Date(repository.updated_at);
    
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - lastUpdated.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
}

