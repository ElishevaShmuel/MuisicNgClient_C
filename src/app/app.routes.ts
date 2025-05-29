import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { UserManagementComponent } from '../components/users/user.component';
import { SongsComponent } from '../components/songs/songs.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'users', component: UserManagementComponent },
    { path: 'songs', component: SongsComponent },
    { path: '**', redirectTo: '/login' } 
];


