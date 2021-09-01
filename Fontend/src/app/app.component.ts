import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand' style="margin-left: 20px">{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
    <li><a class='nav-link' routerLink='/blogs'>Blog-List</a></li>
    <li><a class='nav-link' routerLink='/add'>New Post</a></li>
  </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle : string = 'Blog-Website';
}
