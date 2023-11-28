import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
// import { TodoListComponent } from '../../../Lab5/todo-list/todo-list.component';

import { SharedModule } from './shared/shared.module';
import { SystemComponent } from './system/system.component';
import { UserProfileComponent } from './system/user-profile/user-profile.component';
// import { SystemComponent } from './system/system.component';
// import { HeaderComponent } from './todo-list/header/header.component';
// import { HeaderComponent } from './todo-list/header/header.component';

// import { SystemModule } from './system/system.module';


@NgModule({
  declarations: [
    
    AppComponent,
    SystemComponent,
    
  ],

  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
    // SystemModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
