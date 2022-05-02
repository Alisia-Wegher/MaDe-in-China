import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuHomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
