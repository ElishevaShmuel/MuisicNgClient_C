import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  currentMenuSelection = 2;
}
