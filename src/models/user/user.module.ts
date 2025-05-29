import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {

  id: number;
  name: string;
  email: string;
  password: string;
  profilePicturePath: string;
  role: string;

  constructor(
    @Inject(Number) id: number,
    @Inject(String) name: string,
    @Inject(String) email: string,
    @Inject(String) password: string,
    @Inject(String) profilePicturePath: string,
    @Inject(String) role: string,

  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.profilePicturePath = profilePicturePath;
    this.role = role;
    
  }
}

