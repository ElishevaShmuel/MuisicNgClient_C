import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/Auth/auth.service';
import { link } from 'fs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  dropdownOpen = false;
  mobileMenuOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  // viewProfile(event: Event) {
  //   event.preventDefault();
  //   this.dropdownOpen = false;
  //   this.router.navigate(['./users']);
  //   console.log('Navigate to profile');
  // }

  // viewSettings(event: Event) {
  //   event.preventDefault();
  //   this.dropdownOpen = false;
  //   this.router.navigate(['./settings']);
  //   console.log('Navigate to settings');
  // }

  logout(event: Event) {
    event.preventDefault();
    this.dropdownOpen = false;
    this.mobileMenuOpen = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
