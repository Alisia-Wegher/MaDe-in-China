import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuNoGlutineComponent } from './menu-no-glutine/menu-no-glutine.component';
import { MenuNormaleComponent } from './menu-normale/menu-normale.component';

const LISTA_ROUTES = [
  { path: '', component: MenuHomeComponent },
  { path: 'no-glutine', component: MenuNoGlutineComponent },
  { path: 'normale', component: MenuNormaleComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuHomeComponent, MenuNoGlutineComponent, MenuNormaleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
