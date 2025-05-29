import {  RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/nav-bar/nav-bar.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  currentMenuSelection = 2;
}
