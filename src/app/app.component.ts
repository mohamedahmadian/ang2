import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('userInfo')) {
      this.router.navigate(['/invalid']);
    }
  }
}
