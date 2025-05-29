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
 

  constructor(
    @Inject(Number) id: number,
    @Inject(String) name: string,
    @Inject(String) email: string,

  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    
  }
}

