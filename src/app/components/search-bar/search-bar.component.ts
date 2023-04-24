import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';
import { UserRepository } from 'src/app/models/user-repository';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchInput = new FormControl('');
  userDetails!: UserDetails;
  userRepositories: UserRepository[] = [];

  constructor(
    private router: Router,
    private githubService: GitHubService
  ) { }

  async onSearch(): Promise<void> {
    const username = this.searchInput.value;
    try {
      await this.getUserDetails(username);
      if (this.userDetails) {
        await this.getUserRepositories(username);
        const navigationExtras = {
          queryParams: {
            userDetails: JSON.stringify(this.userDetails),
            userRepositories: JSON.stringify(this.userRepositories)
          }
        };
        this.router.navigate(['/profile'], navigationExtras);
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.log('Error getting user data', error);
    } finally {
      this.searchInput.reset();
    }
  }

  private async getUserDetails(username: any): Promise<void> {
   
    
    try {
      const data: any = await this.githubService.getUserDetails(username).toPromise();
      
      if (data) {
        this.userDetails = {
          avatar_url: data.avatar_url,
          name: data.name,
          username: data.login,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          company: data.company,
          location: data.location,
          email: data.email,
          organizations_url: data.organizations_url,
          twitter_username: data.twitter_username
        };
      } else {
        this.userDetails = undefined as any;
      }
    } catch (error) {
      throw new Error('Error getting user details');
    }
  }

  private async getUserRepositories(username: any): Promise<void> {
    try {
      const data: UserRepository[] = await this.githubService.getUserRepositories(username).toPromise() ?? [];

      data.forEach((element: UserRepository) => {
        let filteredData: UserRepository = {
          name: element.name,
          description: element.description,
        }
        this.userRepositories.push(filteredData);
      });
    } catch (error) {
      throw new Error('Error getting user repositories');
    }
  }
}
