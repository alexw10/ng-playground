import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alex\'s NG Playground';

  constructor(private router: Router) {

  }

  onButtonClick(route: string) {
    this.router.navigate([route]);
  }
}
