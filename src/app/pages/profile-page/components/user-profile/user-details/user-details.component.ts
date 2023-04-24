import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';
import LIST from 'src/assets/detail-content.json';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  dataList!: any[];
  @Input() userDetails!: UserDetails;
  detailList!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/detail-content.json').subscribe(data => {
      this.detailList = data;
    });
    console.log(this.userDetails);

    this.dataList = LIST;
  }

}

