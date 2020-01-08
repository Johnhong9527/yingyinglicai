import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [UserComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
