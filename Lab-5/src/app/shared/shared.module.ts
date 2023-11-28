import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule ({

  imports: [ReactiveFormsModule, FormsModule, RouterLink, DatePipe],

  exports: [ReactiveFormsModule, FormsModule, FooterComponent,HeaderComponent],
  declarations:[HeaderComponent, FooterComponent]


})

export class SharedModule { }