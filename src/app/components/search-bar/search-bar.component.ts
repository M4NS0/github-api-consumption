import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchInput = new FormControl('');

  constructor(private router: Router) { }


  onSearch() {
       this.router.navigate(['/profile'], { queryParams: { q: this.searchInput.value } });
  }
}

