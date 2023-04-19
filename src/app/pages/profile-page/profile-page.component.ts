import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userDetails!: UserDetails;
  userRepositories!: any[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userDetails = JSON.parse(params['userDetails']);
      this.userRepositories = JSON.parse(params['userRepositories']);
      console.log(this.userDetails);
      console.log(this.userRepositories);
      
    });
  }
}
