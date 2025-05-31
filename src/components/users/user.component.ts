import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { UserModule } from '../../models/user/user.module';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserManagementComponent implements OnInit {
  private userService = inject(UserService);

  users: UserModule[] = [];
  filteredUsers: UserModule[] = [];
  searchTerm = '';
  statusFilter = '';
  currentPage = 1;
  totalPages = 1;
  itemsPerPage = 10;

  ngOnInit() {
    if (typeof window !== 'undefined') {

    this.loadUsers();
    }
  }

  async loadUsers() {
    (await this.userService.getUsers()).subscribe({
      next: (users) => {
        this.users = users;
        console.log('Users loaded:', this.users);
  
        this.filterUsers();
      },
      error: (error) => console.error('Error loading users:', error)
    });
  }

  filterUsers() {
    let filtered = this.users;

    if (this.searchTerm) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // if (this.statusFilter) {
    //   filtered = filtered.filter(user => 
    //     this.statusFilter === 'active' ? user.isActive : !user.isActive
    //   );
    // }

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.filteredUsers = filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // toggleUserStatus(user: UserModule) {
  //   this.userService.updateUserStatus(user.id, !user.isActive).subscribe({
  //     next: () => {
  //       user.isActive = !user.isActive;
  //     },
  //     error: (error) => console.error('Error updating user status:', error)
  //   });
  // }

  // editUser(user: UserModule ) {
  //   // Implement edit user functionality
  //   console.log('Edit user:', user);
  // }

  async deleteUser(user: UserModule) {
    if (confirm('Are you sure you want to delete this user?')) {
      (await this.userService.deleteUser(user)).subscribe({
        next: () => {
          console.log("User deleted successfully:", user);          
          this.loadUsers();
        },
        error: (error) => console.error('Error deleting user:', error)
      });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.filterUsers();
    }
  }
}

