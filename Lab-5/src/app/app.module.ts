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
import { TodoListComponent } from './todo-list/todo-list.component';
import { ContactComponent } from './contact/contact.component';
// import { HeaderComponent } from './todo-list/header/header.component';

// import { SystemModule } from './system/system.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // SystemModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
